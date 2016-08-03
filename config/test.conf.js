import fetch from 'node-fetch';
import 'babel-polyfill';
import expect from 'expect';
global.fetch = fetch;
global.expect = expect;
