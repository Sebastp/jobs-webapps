require('module-alias/register')
require('dotenv').config()
const express = require("express");

const {
  PORT = 8080,
} = process.env
