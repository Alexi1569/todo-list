const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'alex-todo-app',
  api_key: '599153234128856',
  api_secret: 'FvDKe33z2mzs2J0g1Tcn6_IqPUU'
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'photos',
  allowedFormats: function(req, file, cb) {
    const ext = path.extname(file.originalname);

    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      req.uploadError = 'Only images allowed (png, jpg, jpeg)';
      cb(false);
    }

    cb(true);
  },
  transformation: [{ width: 100, height: 100, crop: 'lfill' }],
  filename(req, file, cb) {
    const extension = path.extname(file.originalname);

    cb(null, `${file.fieldname}-${Date.now()}`);
  }
});

const upload = multer({
  storage
});

module.exports = upload;
