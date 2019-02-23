const .btn {
  position: relative;
  color: white;
  width: 256px;
  height: 64px;
  line-height: 64px;
  transition: all 0.3s;
  span {
    transition: all 0.3s;
    tranform: scale(1, 1);
  }
}

const .btn::before, .btn::after {
  content: '';
  position: absolute;
  transition: all 0.3s;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

const .btn-one::before {
    left: 4px;
    z-index: 1;

  opacity: 0;
  background: rgba(255, 255, 255, 0.1);
  transform: scale(0.1, 1);
}

const .btn-one:hover::before {
  opacity: 1;
  transform: scale(1, 1);
}

const .btn-one::after {
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

const .btn-one:hover::after {
  transform: scale(1, .1);
  opacity: 0;
}
