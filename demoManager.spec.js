/**
 * Created at 03/06/2018
 * By Adrien
 */

'use strict';

const expect = require('chai').expect;
const DM = require('./demoManager');

before(function () {
    console.log('===============================================');
    console.log('|| The following tests are only relevant     ||');
    console.log('|| for this demo and do not cover all cases. ||');
    console.log('===============================================');
});

describe('Test suit 1', () => {
    describe('"requestSyncMsg" Method', () => {
        it('should exist', () => {
            expect(DM.requestSyncMsg).to.be.a('function');
        });

        it('should return an error for "error" msg', () => {
            expect(DM.requestSyncMsg('error')).to.be.a('error');
        });

        it('should return "Hello there !" for "hello" msg', () => {
            expect(DM.requestSyncMsg('hello')).to.equal('Hello there !');
        });

        it('should return "Hello there !" for "Hello" msg', () => {
            expect(DM.requestSyncMsg('Hello')).to.equal('Yo !');
        });
    });

    describe('"requestAsyncMsg" Method', () => {
        it('should exist', () => {
            expect(DM.requestAsyncMsg).to.be.a('function');
        });

        it('should return an error for "error" msg', (done) => {
            DM.requestAsyncMsg('error', (err) => {
                expect(err).to.be.a('error');
                done();
            });
        }).timeout(5000);

        it('should return "Hello there !" for "hello" msg', (done) => {
            DM.requestAsyncMsg('hello', (err, result) => {
                expect(result).to.equal('Hello there !');
                done();
            });
        }).timeout(5000);

        it('should return "Hello there !" for "Hello" msg', (done) => {
            DM.requestAsyncMsg('Hello', (err, result) => {
                expect(result).to.equal('Hello there !');
                done();
            });
        }).timeout(5000);
    });
});