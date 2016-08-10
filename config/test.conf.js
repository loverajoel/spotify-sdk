import fetch from 'isomorphic-fetch';
import 'babel-polyfill';
import expect from 'expect';
global.fetch = fetch;
global.expect = expect;
