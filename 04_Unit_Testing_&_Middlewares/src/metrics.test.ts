import 'chai'
import { expect } from 'chai'
import { Metric, MetricsHandler } from './metrics'
import { LevelDB } from "./leveldb"

const dbPath: string = 'db_test'
var dbMet: MetricsHandler// = new MetricsHandler(dbPath)

describe('Metrics', function () {
  before(function () {
    LevelDB.clear(dbPath)
    dbMet = new MetricsHandler(dbPath)
  })

  after(function () {
    dbMet.db.close()
  })

  describe('#get', function () {
    it('should get empty array on non existing group', function () {
      dbMet.get((err: Error | null, result?: Metric[]) => {
        expect(err).to.be.null
        expect(result).to.not.be.undefined
        expect(result).to.not.be.empty
      })
    })
  })
})