const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    const extension = path.extname(file.originalname);

    cb(null, `${file.fieldname}-${Date.now()}${extension}`);
  }
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname);

    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      req.uploadError = 'Only images allowed (png, jpg, jpeg)';
      cb(null, false);
    }

    cb(null, true);
  }
});

module.exports = upload;
