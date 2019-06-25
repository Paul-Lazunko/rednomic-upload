import parseFormdata from 'parse-formdata'

const RednomicUpload = async (req, res, next) => {
  try {
    let { parts } = await new Promise((resolve, reject) => {
      parseFormdata(req, (err, formData) => {
        if(err) {
          reject(err);
        } else {
          resolve(formData);
        }
      })
    });
    req.rednomic = { files: parts };
    next ();
  } catch(e) {
    next(e);
  }
};

export { RednomicUpload }
