describe('query', function(){
    'use strict';

    var expect = chai.expect;

    it('should redirect call to getElementById', function(){
        var spy = sinon.spy(document, 'getElementById'), 
        elements = query('#foo');
        expect(elements).to.have.length(1);
        expect(spy.calledOnce);
        expect(spy.calledWith('foo')).to.equal(true);
        spy.restore();
    });

    it('should redirect call to getElementsByClassName for one class name', function(){
        var spy = sinon.spy(document, 'getElementsByClassName'), 
        elements = query('.bar');
        expect(elements).to.have.length(9);
        expect(spy.calledOnce);
        expect(spy.calledWith('bar')).to.equal(true);
        spy.restore();
    });

    it('should redirect call to getElementsByClassName for multiple class names', function(){
        var spy = sinon.spy(document, 'getElementsByClassName'), 
        elements = query('.bar.baz');
        expect(elements).to.have.length(2);
        expect(spy.calledOnce);
        expect(spy.calledWith('bar baz')).to.equal(true);
        spy.restore();
    });

    it('should redirect call to getElementsByTagName', function(){
        var spy = sinon.spy(document, 'getElementsByTagName'), 
        elements = query('div');
        expect(elements).to.have.length(12);
        expect(spy.calledOnce);
        expect(spy.calledWith('div')).to.equal(true);
        spy.restore();
    });

    it('should be handled by querySelectorAll', function(){
        var spy = sinon.spy(document, 'querySelectorAll');
        query('*');
        expect(spy.callCount).to.equal(1);
        query('div, div');
        expect(spy.callCount).to.equal(2);
        query('div div');
        expect(spy.callCount).to.equal(3);
        query('div > div');
        expect(spy.callCount).to.equal(4);
        query('div + div');
        expect(spy.callCount).to.equal(5);
        query('div ~ div');
        expect(spy.callCount).to.equal(6);
        query(':first-child');
        expect(spy.callCount).to.equal(7);
        query('[class="bar"]');
        expect(spy.callCount).to.equal(8);
        query('.bar .baz');
        expect(spy.callCount).to.equal(9);
        spy.restore();
    });

    it('should return an array', function(){
        var elements = query('#foo');
        expect(elements).to.be.an('array');
        elements = query('.bar');
        expect(elements).to.be.an('array');
        elements = query('div');
        expect(elements).to.be.an('array');
        elements = query('*');
        expect(elements).to.be.an('array');
    });

    it('should support a contextual element as a second argument', function(){
        var foo = document.getElementById('foo'), 
        spy = sinon.spy(foo, 'getElementsByTagName'), 
        elements = query('div', foo);
        expect(elements).to.have.length(10);
        expect(spy.calledOnce).to.equal(true);
        expect(spy.calledWith('div')).to.equal(true);
        spy.restore();
    });

});