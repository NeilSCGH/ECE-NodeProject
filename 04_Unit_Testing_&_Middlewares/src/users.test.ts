import chai, { expect } from 'chai'
import { User, UserHandler } from './user'
import { LevelDB } from "./leveldb"

const dbPath: string = 'dbTEST/users'
var dbUsr: UserHandler

describe('Metrics', function () {
  before(function () {
    LevelDB.clear(dbPath)
    dbUsr = new UserHandler(dbPath)
  })

  after(function () {
    dbUsr.db.close()
  })

  describe('#get USER', function () {
    it('should get empty array on non existing group', function () {
      dbUsr.get("neilTEST", (err: Error | null, result?: User) => {
        expect(err).to.be.null
        expect(result).to.not.be.undefined
        expect(result).to.be.empty
      })
    })
  })

  describe('#save', function () {
    it('should save data', function () {
      var usr = new User("neil", "a@gmail.com", "abc", false)
      dbUsr.save(usr, (err: Error | null) => {
        expect(err).to.be.null
        dbUsr.get("neil", (err: Error | null, result?: User) => {
          expect(err).to.be.null
          expect(result).to.not.be.undefined
          if (result)
            console.log(result)
            //expect(result[0].value).to.equal(15)
        })
      })
    })
    /*
    it('should update data', function () {
      var metrics: Metric[] = []
      metrics.push(new Metric("123456789", 16, "neil"))
      dbUsr.save(0, metrics, (err: Error | null) => {
        expect(metrics).to.not.be.empty
        dbUsr.getOne(0, function (err: Error | null, result?: Metric[]) {
          expect(err).to.be.null
          expect(result).to.not.be.undefined
          if (result)
            expect(result[0].value).to.equal(16)
        })
      })
    })
    */
  })
  /*
    describe('#delete', function () {
      it('should delete data', function () {
        var time: any = "123456789"
        dbUsr.deleteOne(0, time,"neil")
        dbUsr.getOne(0, function (err: Error | null, result?: Metric[]) {
          expect(err).to.be.null
          expect(result).to.not.be.undefined
          expect(result).to.be.empty
        })
      })
      it('should not fail if data does not exist', function () {
        var time: any = "123456789"
        dbUsr.deleteOne(0, time,"neil")
      })
    })
    */
})