/**
 * extend fn of model & enclosing the DAO with async & await
 */
class DAO {
  constructor(Schema) {

    this.Schema = Schema;
    this.model = null;
    this.result = null;

    /**
     * export interface
     */
    this.Schema.statics.extend = this.extend;
    this.Schema.statics.init = this.init;

    /**
     * demo & test code
     */
    this.Schema.methods.callInEntity = this.callInEntity;
    this.Schema.statics.callInModel = this.callInModel;
    this.Schema.statics.sleep = this.sleep;

    /**
     * define CURD
     * do search before create update & delete
     */
    this.Schema.statics._create = this._create;
    this.Schema.statics._delete = this._delete;
    this.Schema.statics._update = this._update;
    this.Schema.statics._isExist = this._isExist;
    this.Schema.statics._read = this._read;
  }


  sleep = (time) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log(new Date());
        resolve();
      }, time);
    })
  };

  callInEntity = () => {
    console.log('===callInEntity===')
  };

  callInModel = () => {
    console.log('===callInModel===')
  };

  // C.U.R.D.
  _create = (data) => {
    return new Promise(async (resolve, reject) =>  {
      try {
        this.result = await this.model.findOne(data);
        if (this.result) {
          resolve({
            success: false,
            code: 5000001,
            msg: 'resource exist',
            data: {}
          });
        } else {
          try {
            this.result = await this.model.create(data);
            if (this.result) {
              resolve({
                success: true,
                code: 2000000,
                msg: 'resource exist',
                data: this.result
              });
            } else {
              resolve({
                success: false,
                code: 5000001,
                msg: 'resource no exist',
                data: {}
              });
            }
          } catch (err) {
            console.log(err);
            resolve({
              success: false,
              code: 5000001,
              msg: err,
              data: {}
            });
          }
        }
      } catch (err) {
        console.log(err);
        resolve({
          success: false,
          code: 5000001,
          msg: err,
          data: {}
        });
      }
    });
  };

  _update = (data) => {
    return new Promise(async (resolve, reject) =>  {
      try {
        let _id = data._id;
        this.result = await this.model.findOne({_id: _id});
        if (this.result) {
          try {
            delete data._id;
            this.result = await this.model.update({_id: _id} ,data);
            if (this.result) {
              resolve({
                success: true,
                code: 2000000,
                msg: 'resource exist',
                data: this.result
              });
            } else {
              resolve({
                success: false,
                code: 5000001,
                msg: 'resource no exist',
                data: {}
              });
            }
          } catch (err) {
            console.log(err);
            resolve({
              success: false,
              code: 5000001,
              msg: err,
              data: {}
            });
          }
        } else {
          resolve({
            success: false,
            code: 5000001,
            msg: 'resource no exist',
            data: {}
          });
        }
      } catch (err) {
        console.log(err);
        resolve({
          success: false,
          code: 5000001,
          msg: err,
          data: {}
        });
      }
    });
  };

  _read = (data) => {
    return new Promise(async (resolve, reject) =>  {
      try {
        // await this.sleep(2000); // break when a await return a promise (resolve or reject)
        this.result = await this.model.find(data);
        // console.log('======data from database after await', this.result);
        // await this.sleep(4000); // break when a await return a promise (resolve or reject)
        if (this.result) {
          resolve({
            success: true,
            code: 2000000,
            msg: 'resource exist',
            data: this.result
          });
        } else {
          resolve({
            success: false,
            code: 5000001,
            msg: 'resource no exist',
            data: {}
          });
        }
      } catch (err) {
        console.log(err);
        resolve({
          success: false,
          code: 5000001,
          msg: err,
          data: {}
        });
      }
    });
  };

  _delete = (data) => {
    return new Promise(async (resolve, reject) =>  {
      try {
        this.result = await this.model.findOne({_id: data._id});
        if (this.result) {
          try {
            this.result = await this.model.remove(data);
            if (this.result) {
              resolve({
                success: true,
                code: 2000000,
                msg: 'resource exist',
                data: this.result
              });
            } else {
              resolve({
                success: false,
                code: 5000001,
                msg: 'resource no exist',
                data: {}
              });
            }
          } catch (err) {
            console.log(err);
            resolve({
              success: false,
              code: 5000001,
              msg: err,
              data: {}
            });
          }
        } else {
          resolve({
            success: false,
            code: 5000001,
            msg: 'resource no exist',
            data: {}
          });
        }
      } catch (err) {
        console.log(err);
        resolve({
          success: false,
          code: 5000001,
          msg: err,
          data: {}
        });
      }
    });
  };

  /**
   * export interface
   */
  extend = () => this.Schema;

  /**
   * init model
   */
  init = (model) => (
    this.model = model
  );
}

module.exports = DAO;