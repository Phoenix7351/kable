(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'uuid-jsLegacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('uuid-jsLegacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kable-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kable-core'.");
    }if (typeof this['uuid-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kable-core'. Its dependency 'uuid-jsLegacy' was not found. Please, check whether 'uuid-jsLegacy' is loaded prior to 'kable-core'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kable-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kable-core'.");
    }root['kable-core'] = factory(typeof this['kable-core'] === 'undefined' ? {} : this['kable-core'], kotlin, this['uuid-jsLegacy'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$uuid_jsLegacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var uuidFrom = $module$uuid_jsLegacy.com.benasher44.uuid.uuidFrom_61zpoe$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var CoroutineStart = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineStart;
  var collect = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.collect_wkex2n$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var cancelAndJoin = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancelAndJoin_5dx9u$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Exception_init_0 = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.flow_sxz0o1$;
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var MutableSharedFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.MutableSharedFlow_ympafm$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Result = Kotlin.kotlin.Result;
  var Throwable = Error;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var equals = Kotlin.equals;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var get_job = $module$kotlinx_coroutines_core.kotlinx.coroutines.get_job_qdnslq$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope_1fupul$;
  var MutableStateFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.MutableStateFlow_mh5how$;
  var filterNotNull = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.filterNotNull_4gngrh$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var wrapFunction = Kotlin.wrapFunction;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  var Any = Object;
  var awaitClose = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.awaitClose_msfyrq$;
  var callbackFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.callbackFlow_b9ud7o$;
  var toString = Kotlin.toString;
  BluetoothLeException.prototype = Object.create(Exception.prototype);
  BluetoothLeException.prototype.constructor = BluetoothLeException;
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  ConnectionRejectedException.prototype = Object.create(IOException.prototype);
  ConnectionRejectedException.prototype.constructor = ConnectionRejectedException;
  NotReadyException.prototype = Object.create(IOException.prototype);
  NotReadyException.prototype.constructor = NotReadyException;
  GattStatusException.prototype = Object.create(IOException.prototype);
  GattStatusException.prototype.constructor = GattStatusException;
  ConnectionLostException.prototype = Object.create(IOException.prototype);
  ConnectionLostException.prototype.constructor = ConnectionLostException;
  WriteType.prototype = Object.create(Enum.prototype);
  WriteType.prototype.constructor = WriteType;
  State$Connecting.prototype = Object.create(State.prototype);
  State$Connecting.prototype.constructor = State$Connecting;
  State$Connected.prototype = Object.create(State.prototype);
  State$Connected.prototype.constructor = State$Connected;
  State$Disconnecting.prototype = Object.create(State.prototype);
  State$Disconnecting.prototype.constructor = State$Disconnecting;
  State$Disconnected$Status$PeripheralDisconnected.prototype = Object.create(State$Disconnected$Status.prototype);
  State$Disconnected$Status$PeripheralDisconnected.prototype.constructor = State$Disconnected$Status$PeripheralDisconnected;
  State$Disconnected$Status$Failed.prototype = Object.create(State$Disconnected$Status.prototype);
  State$Disconnected$Status$Failed.prototype.constructor = State$Disconnected$Status$Failed;
  State$Disconnected$Status$Timeout.prototype = Object.create(State$Disconnected$Status.prototype);
  State$Disconnected$Status$Timeout.prototype.constructor = State$Disconnected$Status$Timeout;
  State$Disconnected$Status$UnknownDevice.prototype = Object.create(State$Disconnected$Status.prototype);
  State$Disconnected$Status$UnknownDevice.prototype.constructor = State$Disconnected$Status$UnknownDevice;
  State$Disconnected$Status$Cancelled.prototype = Object.create(State$Disconnected$Status.prototype);
  State$Disconnected$Status$Cancelled.prototype.constructor = State$Disconnected$Status$Cancelled;
  State$Disconnected$Status$ConnectionLimitReached.prototype = Object.create(State$Disconnected$Status.prototype);
  State$Disconnected$Status$ConnectionLimitReached.prototype.constructor = State$Disconnected$Status$ConnectionLimitReached;
  State$Disconnected$Status$EncryptionTimedOut.prototype = Object.create(State$Disconnected$Status.prototype);
  State$Disconnected$Status$EncryptionTimedOut.prototype.constructor = State$Disconnected$Status$EncryptionTimedOut;
  State$Disconnected$Status$Unknown.prototype = Object.create(State$Disconnected$Status.prototype);
  State$Disconnected$Status$Unknown.prototype.constructor = State$Disconnected$Status$Unknown;
  State$Disconnected.prototype = Object.create(State.prototype);
  State$Disconnected.prototype.constructor = State$Disconnected;
  Options$Filter$Name.prototype = Object.create(Options$Filter.prototype);
  Options$Filter$Name.prototype.constructor = Options$Filter$Name;
  Options$Filter$NamePrefix.prototype = Object.create(Options$Filter.prototype);
  Options$Filter$NamePrefix.prototype.constructor = Options$Filter$NamePrefix;
  Options$Filter$Services.prototype = Object.create(Options$Filter.prototype);
  Options$Filter$Services.prototype.constructor = Options$Filter$Services;
  function characteristicOf(service, characteristic) {
    return new LazyCharacteristic(uuidFrom(service), uuidFrom(characteristic));
  }
  function Characteristic() {
  }
  Characteristic.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Characteristic',
    interfaces: []
  };
  function LazyCharacteristic(serviceUuid, characteristicUuid) {
    this.serviceUuid_ec9z3$_0 = serviceUuid;
    this.characteristicUuid_3t5xrn$_0 = characteristicUuid;
  }
  Object.defineProperty(LazyCharacteristic.prototype, 'serviceUuid', {
    get: function () {
      return this.serviceUuid_ec9z3$_0;
    }
  });
  Object.defineProperty(LazyCharacteristic.prototype, 'characteristicUuid', {
    get: function () {
      return this.characteristicUuid_3t5xrn$_0;
    }
  });
  LazyCharacteristic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazyCharacteristic',
    interfaces: [Characteristic]
  };
  LazyCharacteristic.prototype.component1 = function () {
    return this.serviceUuid;
  };
  LazyCharacteristic.prototype.component2 = function () {
    return this.characteristicUuid;
  };
  LazyCharacteristic.prototype.copy_jbzgac$ = function (serviceUuid, characteristicUuid) {
    return new LazyCharacteristic(serviceUuid === void 0 ? this.serviceUuid : serviceUuid, characteristicUuid === void 0 ? this.characteristicUuid : characteristicUuid);
  };
  LazyCharacteristic.prototype.toString = function () {
    return 'LazyCharacteristic(serviceUuid=' + Kotlin.toString(this.serviceUuid) + (', characteristicUuid=' + Kotlin.toString(this.characteristicUuid)) + ')';
  };
  LazyCharacteristic.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.serviceUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.characteristicUuid) | 0;
    return result;
  };
  LazyCharacteristic.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.serviceUuid, other.serviceUuid) && Kotlin.equals(this.characteristicUuid, other.characteristicUuid)))));
  };
  function DiscoveredCharacteristic(serviceUuid, characteristicUuid, descriptors) {
    this.serviceUuid_vng91v$_0 = serviceUuid;
    this.characteristicUuid_vknrtt$_0 = characteristicUuid;
    this.descriptors = descriptors;
  }
  Object.defineProperty(DiscoveredCharacteristic.prototype, 'serviceUuid', {
    get: function () {
      return this.serviceUuid_vng91v$_0;
    }
  });
  Object.defineProperty(DiscoveredCharacteristic.prototype, 'characteristicUuid', {
    get: function () {
      return this.characteristicUuid_vknrtt$_0;
    }
  });
  DiscoveredCharacteristic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiscoveredCharacteristic',
    interfaces: [Characteristic]
  };
  DiscoveredCharacteristic.prototype.component1 = function () {
    return this.serviceUuid;
  };
  DiscoveredCharacteristic.prototype.component2 = function () {
    return this.characteristicUuid;
  };
  DiscoveredCharacteristic.prototype.component3 = function () {
    return this.descriptors;
  };
  DiscoveredCharacteristic.prototype.copy_jexfie$ = function (serviceUuid, characteristicUuid, descriptors) {
    return new DiscoveredCharacteristic(serviceUuid === void 0 ? this.serviceUuid : serviceUuid, characteristicUuid === void 0 ? this.characteristicUuid : characteristicUuid, descriptors === void 0 ? this.descriptors : descriptors);
  };
  DiscoveredCharacteristic.prototype.toString = function () {
    return 'DiscoveredCharacteristic(serviceUuid=' + Kotlin.toString(this.serviceUuid) + (', characteristicUuid=' + Kotlin.toString(this.characteristicUuid)) + (', descriptors=' + Kotlin.toString(this.descriptors)) + ')';
  };
  DiscoveredCharacteristic.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.serviceUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.characteristicUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.descriptors) | 0;
    return result;
  };
  DiscoveredCharacteristic.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.serviceUuid, other.serviceUuid) && Kotlin.equals(this.characteristicUuid, other.characteristicUuid) && Kotlin.equals(this.descriptors, other.descriptors)))));
  };
  function descriptorOf(service, characteristic, descriptor) {
    return new LazyDescriptor(uuidFrom(service), uuidFrom(characteristic), uuidFrom(descriptor));
  }
  function Descriptor() {
  }
  Descriptor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Descriptor',
    interfaces: []
  };
  function LazyDescriptor(serviceUuid, characteristicUuid, descriptorUuid) {
    this.serviceUuid_5lhyoj$_0 = serviceUuid;
    this.characteristicUuid_nyh9y9$_0 = characteristicUuid;
    this.descriptorUuid_lznv0t$_0 = descriptorUuid;
  }
  Object.defineProperty(LazyDescriptor.prototype, 'serviceUuid', {
    get: function () {
      return this.serviceUuid_5lhyoj$_0;
    }
  });
  Object.defineProperty(LazyDescriptor.prototype, 'characteristicUuid', {
    get: function () {
      return this.characteristicUuid_nyh9y9$_0;
    }
  });
  Object.defineProperty(LazyDescriptor.prototype, 'descriptorUuid', {
    get: function () {
      return this.descriptorUuid_lznv0t$_0;
    }
  });
  LazyDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazyDescriptor',
    interfaces: [Descriptor]
  };
  LazyDescriptor.prototype.component1 = function () {
    return this.serviceUuid;
  };
  LazyDescriptor.prototype.component2 = function () {
    return this.characteristicUuid;
  };
  LazyDescriptor.prototype.component3 = function () {
    return this.descriptorUuid;
  };
  LazyDescriptor.prototype.copy_v2lcr$ = function (serviceUuid, characteristicUuid, descriptorUuid) {
    return new LazyDescriptor(serviceUuid === void 0 ? this.serviceUuid : serviceUuid, characteristicUuid === void 0 ? this.characteristicUuid : characteristicUuid, descriptorUuid === void 0 ? this.descriptorUuid : descriptorUuid);
  };
  LazyDescriptor.prototype.toString = function () {
    return 'LazyDescriptor(serviceUuid=' + Kotlin.toString(this.serviceUuid) + (', characteristicUuid=' + Kotlin.toString(this.characteristicUuid)) + (', descriptorUuid=' + Kotlin.toString(this.descriptorUuid)) + ')';
  };
  LazyDescriptor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.serviceUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.characteristicUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.descriptorUuid) | 0;
    return result;
  };
  LazyDescriptor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.serviceUuid, other.serviceUuid) && Kotlin.equals(this.characteristicUuid, other.characteristicUuid) && Kotlin.equals(this.descriptorUuid, other.descriptorUuid)))));
  };
  function BluetoothLeException(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    Exception_init(this);
    this.name = 'BluetoothLeException';
  }
  BluetoothLeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BluetoothLeException',
    interfaces: [Exception]
  };
  function ConnectionRejectedException(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    IOException.call(this, message, cause);
    this.name = 'ConnectionRejectedException';
  }
  ConnectionRejectedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConnectionRejectedException',
    interfaces: [IOException]
  };
  function NotReadyException(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    IOException.call(this, message, cause);
    this.name = 'NotReadyException';
  }
  NotReadyException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotReadyException',
    interfaces: [IOException]
  };
  function GattStatusException(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    IOException.call(this, message, cause);
    this.name = 'GattStatusException';
  }
  GattStatusException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GattStatusException',
    interfaces: [IOException]
  };
  function ConnectionLostException(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    IOException.call(this, message, cause);
    this.name = 'ConnectionLostException';
  }
  ConnectionLostException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConnectionLostException',
    interfaces: [IOException]
  };
  function Coroutine$launchIn$lambda(this$launchIn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$launchIn = this$launchIn_0;
  }
  Coroutine$launchIn$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$launchIn$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$launchIn$lambda.prototype.constructor = Coroutine$launchIn$lambda;
  Coroutine$launchIn$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = collect(this.local$this$launchIn, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function launchIn$lambda(this$launchIn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$launchIn$lambda(this$launchIn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function launchIn($receiver, scope, start) {
    if (start === void 0)
      start = CoroutineStart.DEFAULT;
    return launch(scope, void 0, start, launchIn$lambda($receiver));
  }
  function get_isNotCancelled($receiver) {
    return !$receiver.isCancelled;
  }
  function Coroutine$cancelAndJoinChildren($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$forEach$result = void 0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$cancelAndJoinChildren.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cancelAndJoinChildren.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cancelAndJoinChildren.prototype.constructor = Coroutine$cancelAndJoinChildren;
  Coroutine$cancelAndJoinChildren.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$$receiver.children.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }
            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = cancelAndJoin(element, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return this.local$forEach$result;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function cancelAndJoinChildren($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$cancelAndJoinChildren($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function WriteType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WriteType_initFields() {
    WriteType_initFields = function () {
    };
    WriteType$WithResponse_instance = new WriteType('WithResponse', 0);
    WriteType$WithoutResponse_instance = new WriteType('WithoutResponse', 1);
  }
  var WriteType$WithResponse_instance;
  function WriteType$WithResponse_getInstance() {
    WriteType_initFields();
    return WriteType$WithResponse_instance;
  }
  var WriteType$WithoutResponse_instance;
  function WriteType$WithoutResponse_getInstance() {
    WriteType_initFields();
    return WriteType$WithoutResponse_instance;
  }
  WriteType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WriteType',
    interfaces: [Enum]
  };
  function WriteType$values() {
    return [WriteType$WithResponse_getInstance(), WriteType$WithoutResponse_getInstance()];
  }
  WriteType.values = WriteType$values;
  function WriteType$valueOf(name) {
    switch (name) {
      case 'WithResponse':
        return WriteType$WithResponse_getInstance();
      case 'WithoutResponse':
        return WriteType$WithoutResponse_getInstance();
      default:throwISE('No enum constant com.juul.kable.WriteType.' + name);
    }
  }
  WriteType.valueOf_61zpoe$ = WriteType$valueOf;
  function Peripheral() {
  }
  Peripheral.prototype.write_a3veb4$ = function (characteristic, data, writeType, continuation, callback$default) {
    if (writeType === void 0)
      writeType = WriteType$WithoutResponse_getInstance();
    return callback$default ? callback$default(characteristic, data, writeType, continuation) : this.write_a3veb4$$default(characteristic, data, writeType, continuation);
  };
  Peripheral.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Peripheral',
    interfaces: []
  };
  function Scanner() {
  }
  Scanner.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Scanner',
    interfaces: []
  };
  function Service() {
  }
  Service.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Service',
    interfaces: []
  };
  function DiscoveredService(serviceUuid, characteristics) {
    this.serviceUuid_fssuur$_0 = serviceUuid;
    this.characteristics = characteristics;
  }
  Object.defineProperty(DiscoveredService.prototype, 'serviceUuid', {
    get: function () {
      return this.serviceUuid_fssuur$_0;
    }
  });
  DiscoveredService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiscoveredService',
    interfaces: [Service]
  };
  DiscoveredService.prototype.component1 = function () {
    return this.serviceUuid;
  };
  DiscoveredService.prototype.component2 = function () {
    return this.characteristics;
  };
  DiscoveredService.prototype.copy_ghdiu9$ = function (serviceUuid, characteristics) {
    return new DiscoveredService(serviceUuid === void 0 ? this.serviceUuid : serviceUuid, characteristics === void 0 ? this.characteristics : characteristics);
  };
  DiscoveredService.prototype.toString = function () {
    return 'DiscoveredService(serviceUuid=' + Kotlin.toString(this.serviceUuid) + (', characteristics=' + Kotlin.toString(this.characteristics)) + ')';
  };
  DiscoveredService.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.serviceUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.characteristics) | 0;
    return result;
  };
  DiscoveredService.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.serviceUuid, other.serviceUuid) && Kotlin.equals(this.characteristics, other.characteristics)))));
  };
  function State() {
  }
  function State$Connecting() {
    State$Connecting_instance = this;
    State.call(this);
  }
  State$Connecting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Connecting',
    interfaces: [State]
  };
  var State$Connecting_instance = null;
  function State$Connecting_getInstance() {
    if (State$Connecting_instance === null) {
      new State$Connecting();
    }return State$Connecting_instance;
  }
  function State$Connected() {
    State$Connected_instance = this;
    State.call(this);
  }
  State$Connected.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Connected',
    interfaces: [State]
  };
  var State$Connected_instance = null;
  function State$Connected_getInstance() {
    if (State$Connected_instance === null) {
      new State$Connected();
    }return State$Connected_instance;
  }
  function State$Disconnecting() {
    State$Disconnecting_instance = this;
    State.call(this);
  }
  State$Disconnecting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Disconnecting',
    interfaces: [State]
  };
  var State$Disconnecting_instance = null;
  function State$Disconnecting_getInstance() {
    if (State$Disconnecting_instance === null) {
      new State$Disconnecting();
    }return State$Disconnecting_instance;
  }
  function State$Disconnected(status) {
    if (status === void 0)
      status = null;
    State.call(this);
    this.status = status;
  }
  function State$Disconnected$Status() {
  }
  function State$Disconnected$Status$PeripheralDisconnected() {
    State$Disconnected$Status$PeripheralDisconnected_instance = this;
    State$Disconnected$Status.call(this);
  }
  State$Disconnected$Status$PeripheralDisconnected.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PeripheralDisconnected',
    interfaces: [State$Disconnected$Status]
  };
  var State$Disconnected$Status$PeripheralDisconnected_instance = null;
  function State$Disconnected$Status$PeripheralDisconnected_getInstance() {
    if (State$Disconnected$Status$PeripheralDisconnected_instance === null) {
      new State$Disconnected$Status$PeripheralDisconnected();
    }return State$Disconnected$Status$PeripheralDisconnected_instance;
  }
  function State$Disconnected$Status$Failed() {
    State$Disconnected$Status$Failed_instance = this;
    State$Disconnected$Status.call(this);
  }
  State$Disconnected$Status$Failed.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Failed',
    interfaces: [State$Disconnected$Status]
  };
  var State$Disconnected$Status$Failed_instance = null;
  function State$Disconnected$Status$Failed_getInstance() {
    if (State$Disconnected$Status$Failed_instance === null) {
      new State$Disconnected$Status$Failed();
    }return State$Disconnected$Status$Failed_instance;
  }
  function State$Disconnected$Status$Timeout() {
    State$Disconnected$Status$Timeout_instance = this;
    State$Disconnected$Status.call(this);
  }
  State$Disconnected$Status$Timeout.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Timeout',
    interfaces: [State$Disconnected$Status]
  };
  var State$Disconnected$Status$Timeout_instance = null;
  function State$Disconnected$Status$Timeout_getInstance() {
    if (State$Disconnected$Status$Timeout_instance === null) {
      new State$Disconnected$Status$Timeout();
    }return State$Disconnected$Status$Timeout_instance;
  }
  function State$Disconnected$Status$UnknownDevice() {
    State$Disconnected$Status$UnknownDevice_instance = this;
    State$Disconnected$Status.call(this);
  }
  State$Disconnected$Status$UnknownDevice.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UnknownDevice',
    interfaces: [State$Disconnected$Status]
  };
  var State$Disconnected$Status$UnknownDevice_instance = null;
  function State$Disconnected$Status$UnknownDevice_getInstance() {
    if (State$Disconnected$Status$UnknownDevice_instance === null) {
      new State$Disconnected$Status$UnknownDevice();
    }return State$Disconnected$Status$UnknownDevice_instance;
  }
  function State$Disconnected$Status$Cancelled() {
    State$Disconnected$Status$Cancelled_instance = this;
    State$Disconnected$Status.call(this);
  }
  State$Disconnected$Status$Cancelled.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Cancelled',
    interfaces: [State$Disconnected$Status]
  };
  var State$Disconnected$Status$Cancelled_instance = null;
  function State$Disconnected$Status$Cancelled_getInstance() {
    if (State$Disconnected$Status$Cancelled_instance === null) {
      new State$Disconnected$Status$Cancelled();
    }return State$Disconnected$Status$Cancelled_instance;
  }
  function State$Disconnected$Status$ConnectionLimitReached() {
    State$Disconnected$Status$ConnectionLimitReached_instance = this;
    State$Disconnected$Status.call(this);
  }
  State$Disconnected$Status$ConnectionLimitReached.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConnectionLimitReached',
    interfaces: [State$Disconnected$Status]
  };
  var State$Disconnected$Status$ConnectionLimitReached_instance = null;
  function State$Disconnected$Status$ConnectionLimitReached_getInstance() {
    if (State$Disconnected$Status$ConnectionLimitReached_instance === null) {
      new State$Disconnected$Status$ConnectionLimitReached();
    }return State$Disconnected$Status$ConnectionLimitReached_instance;
  }
  function State$Disconnected$Status$EncryptionTimedOut() {
    State$Disconnected$Status$EncryptionTimedOut_instance = this;
    State$Disconnected$Status.call(this);
  }
  State$Disconnected$Status$EncryptionTimedOut.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EncryptionTimedOut',
    interfaces: [State$Disconnected$Status]
  };
  var State$Disconnected$Status$EncryptionTimedOut_instance = null;
  function State$Disconnected$Status$EncryptionTimedOut_getInstance() {
    if (State$Disconnected$Status$EncryptionTimedOut_instance === null) {
      new State$Disconnected$Status$EncryptionTimedOut();
    }return State$Disconnected$Status$EncryptionTimedOut_instance;
  }
  function State$Disconnected$Status$Unknown(status) {
    State$Disconnected$Status.call(this);
    this.status = status;
  }
  State$Disconnected$Status$Unknown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Unknown',
    interfaces: [State$Disconnected$Status]
  };
  State$Disconnected$Status$Unknown.prototype.component1 = function () {
    return this.status;
  };
  State$Disconnected$Status$Unknown.prototype.copy_za3lpa$ = function (status) {
    return new State$Disconnected$Status$Unknown(status === void 0 ? this.status : status);
  };
  State$Disconnected$Status$Unknown.prototype.toString = function () {
    return 'Unknown(status=' + Kotlin.toString(this.status) + ')';
  };
  State$Disconnected$Status$Unknown.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    return result;
  };
  State$Disconnected$Status$Unknown.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.status, other.status))));
  };
  State$Disconnected$Status.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Status',
    interfaces: []
  };
  State$Disconnected.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Disconnected',
    interfaces: [State]
  };
  State$Disconnected.prototype.component1 = function () {
    return this.status;
  };
  State$Disconnected.prototype.copy_1ott5t$ = function (status) {
    return new State$Disconnected(status === void 0 ? this.status : status);
  };
  State$Disconnected.prototype.toString = function () {
    return 'Disconnected(status=' + Kotlin.toString(this.status) + ')';
  };
  State$Disconnected.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    return result;
  };
  State$Disconnected.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.status, other.status))));
  };
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function Advertisement(bluetoothDevice, rssi) {
    this.bluetoothDevice_8be2vx$ = bluetoothDevice;
    this.rssi = rssi;
  }
  Object.defineProperty(Advertisement.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.bluetoothDevice_8be2vx$.name;
    }
  });
  Advertisement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Advertisement',
    interfaces: []
  };
  function get_bluetooth() {
    var tmp$;
    var value = Kotlin.isType(tmp$ = window.navigator.bluetooth, Bluetooth) ? tmp$ : null;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Bluetooth unavailable';
      throw IllegalStateException_init(message.toString());
    } else {
      checkNotNull$result = value;
    }
    return checkNotNull$result;
  }
  function requestPeripheral$lambda(this$requestPeripheral) {
    return function (device) {
      return peripheral_0(this$requestPeripheral, device);
    };
  }
  function requestPeripheral($receiver, options) {
    return get_bluetooth().requestDevice(toDynamic(options)).then(requestPeripheral$lambda($receiver));
  }
  function toDynamic$ObjectLiteral(this$toDynamic) {
    this.acceptAllDevices = true;
    this.optionalServices = this$toDynamic.optionalServices;
  }
  toDynamic$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function toDynamic$ObjectLiteral_0(this$toDynamic) {
    this.optionalServices = this$toDynamic.optionalServices;
    this.filters = this$toDynamic.filters;
  }
  toDynamic$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function toDynamic($receiver) {
    if ($receiver.filters == null) {
      return new toDynamic$ObjectLiteral($receiver);
    } else {
      return new toDynamic$ObjectLiteral_0($receiver);
    }
  }
  function IOException(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    Exception_init_0(message, this);
    this.name = 'IOException';
  }
  IOException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IOException',
    interfaces: [Exception]
  };
  function collect$ObjectLiteral(closure$action) {
    this.closure$action = closure$action;
  }
  collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
    return this.closure$action(value, continuation);
  };
  collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
  var CHARACTERISTIC_VALUE_CHANGED;
  function CharacteristicChange(characteristic, data) {
    this.characteristic = characteristic;
    this.data = data;
  }
  CharacteristicChange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharacteristicChange',
    interfaces: []
  };
  CharacteristicChange.prototype.component1 = function () {
    return this.characteristic;
  };
  CharacteristicChange.prototype.component2 = function () {
    return this.data;
  };
  CharacteristicChange.prototype.copy_o5upe5$ = function (characteristic, data) {
    return new CharacteristicChange(characteristic === void 0 ? this.characteristic : characteristic, data === void 0 ? this.data : data);
  };
  CharacteristicChange.prototype.toString = function () {
    return 'CharacteristicChange(characteristic=' + Kotlin.toString(this.characteristic) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  CharacteristicChange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.characteristic) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  CharacteristicChange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.characteristic, other.characteristic) && Kotlin.equals(this.data, other.data)))));
  };
  function Observation(count, listener) {
    if (count === void 0)
      count = 0;
    this.count = count;
    this.listener = listener;
  }
  Observation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Observation',
    interfaces: []
  };
  Observation.prototype.component1 = function () {
    return this.count;
  };
  Observation.prototype.component2 = function () {
    return this.listener;
  };
  Observation.prototype.copy_r9bh1m$ = function (count, listener) {
    return new Observation(count === void 0 ? this.count : count, listener === void 0 ? this.listener : listener);
  };
  Observation.prototype.toString = function () {
    return 'Observation(count=' + Kotlin.toString(this.count) + (', listener=' + Kotlin.toString(this.listener)) + ')';
  };
  Observation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.listener) | 0;
    return result;
  };
  Observation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.count, other.count) && Kotlin.equals(this.listener, other.listener)))));
  };
  function Observers(peripheral) {
    this.peripheral_0 = peripheral;
    this.observers_0 = LinkedHashMap_init();
    this.changes_0 = MutableSharedFlow(void 0, 64);
  }
  function Coroutine$Observers$acquire$lambda$lambda(closure$characteristic_0, this$_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$characteristic = closure$characteristic_0;
    this.local$this$ = this$_0;
    this.local$it = it_0;
  }
  Coroutine$Observers$acquire$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Observers$acquire$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Observers$acquire$lambda$lambda.prototype.constructor = Coroutine$Observers$acquire$lambda$lambda;
  Coroutine$Observers$acquire$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$it.characteristic.characteristicUuid) != null ? tmp$.equals(this.local$closure$characteristic.characteristicUuid) : null) {
              this.state_0 = 2;
              this.result_0 = this.local$this$.emit_11rb$(this.local$it.data, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Observers$acquire$lambda$lambda(closure$characteristic_0, this$_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Observers$acquire$lambda$lambda(closure$characteristic_0, this$_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Observers$acquire$lambda(this$Observers_0, closure$characteristic_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 12;
    this.local$this$Observers = this$Observers_0;
    this.local$closure$characteristic = closure$characteristic_0;
    this.local$bluetoothRemoteGATTCharacteristic = void 0;
    this.local$observation = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Observers$acquire$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Observers$acquire$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Observers$acquire$lambda.prototype.constructor = Coroutine$Observers$acquire$lambda;
  Coroutine$Observers$acquire$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$bluetoothRemoteGATTCharacteristic = this.local$this$Observers.peripheral_0.bluetoothRemoteGATTCharacteristicFrom_woi46e$(this.local$closure$characteristic);
            var tmp$_0;
            if ((tmp$ = this.local$this$Observers.observers_0.get_11rb$(this.local$closure$characteristic)) != null)
              tmp$_0 = tmp$;
            else {
              var closure$characteristic = this.local$closure$characteristic;
              var this$Observers = this.local$this$Observers;
              var $receiver = new Observation(void 0, this$Observers.createListener_0(closure$characteristic));
              this$Observers.observers_0.put_xwzc9p$(closure$characteristic, $receiver);
              tmp$_0 = $receiver;
            }

            this.local$observation = tmp$_0;
            if ((this.local$observation.count = this.local$observation.count + 1 | 0, this.local$observation.count) === 1) {
              this.local$bluetoothRemoteGATTCharacteristic.addEventListener(CHARACTERISTIC_VALUE_CHANGED, this.local$observation.listener);
              this.state_0 = 1;
              this.result_0 = await_0(this.local$bluetoothRemoteGATTCharacteristic.startNotifications(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            this.state_0 = 2;
            continue;
          case 2:
            this.exceptionState_0 = 6;
            var $receiver_0 = this.local$this$Observers.changes_0;
            var action = Observers$acquire$lambda$lambda(this.local$closure$characteristic, this.local$$receiver);
            this.state_0 = 3;
            this.result_0 = $receiver_0.collect_42ocv1$(new collect$ObjectLiteral(action), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0;
            this.exceptionState_0 = 12;
            this.finallyPath_0 = [4];
            this.state_0 = 7;
            this.$returnValue = this.result_0;
            continue;
          case 4:
            return this.$returnValue;
          case 5:
            return;
          case 6:
            this.finallyPath_0 = [12];
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 12;
            if ((this.local$observation.count = this.local$observation.count - 1 | 0, this.local$observation.count) < 1) {
              var tmp$_1;
              this.exceptionState_0 = 9;
              this.state_0 = 8;
              this.result_0 = await_0(this.local$bluetoothRemoteGATTCharacteristic.stopNotifications(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 11;
              continue;
            }

          case 8:
            tmp$_1 = new Result(this.result_0);
            this.exceptionState_0 = 12;
            this.state_0 = 10;
            continue;
          case 9:
            this.exceptionState_0 = 12;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              tmp$_1 = new Result(createFailure(e_0));
            } else
              throw e_0;
            this.state_0 = 10;
            continue;
          case 10:
            this.local$bluetoothRemoteGATTCharacteristic.removeEventListener(CHARACTERISTIC_VALUE_CHANGED, this.local$observation.listener);
            this.local$this$Observers.observers_0.remove_11rb$(this.local$closure$characteristic);
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 12:
            throw this.exception_0;
          default:this.state_0 = 12;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 12) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Observers$acquire$lambda(this$Observers_0, closure$characteristic_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Observers$acquire$lambda(this$Observers_0, closure$characteristic_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Observers.prototype.acquire_1m72hp$ = function (characteristic) {
    return flow(Observers$acquire$lambda(this, characteristic));
  };
  Observers.prototype.invalidate = function () {
    var tmp$;
    tmp$ = this.observers_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var observation = element.value;
      observation.listener = null;
    }
  };
  function Coroutine$rewire_o0vhv5$($this, services_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$platformCharacteristic = void 0;
    this.local$$receiver = void 0;
    this.local$services = services_0;
  }
  Coroutine$rewire_o0vhv5$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$rewire_o0vhv5$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$rewire_o0vhv5$.prototype.constructor = Coroutine$rewire_o0vhv5$;
  Coroutine$rewire_o0vhv5$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.observers_0.isEmpty()) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.$this.observers_0.entries.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }
            var element = this.local$tmp$.next();
            var characteristic = element.key;
            var first$result;
            first$break: do {
              var tmp$;
              tmp$ = this.local$services.iterator();
              while (tmp$.hasNext()) {
                var element_0 = tmp$.next();
                var tmp$_0;
                if ((tmp$_0 = element_0.serviceUuid) != null ? tmp$_0.equals(characteristic.serviceUuid) : null) {
                  first$result = element_0;
                  break first$break;
                }}
              throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
            }
             while (false);
            var $receiver = first$result.characteristics;
            var first$result_0;
            first$break: do {
              var tmp$_1;
              tmp$_1 = $receiver.iterator();
              while (tmp$_1.hasNext()) {
                var element_1 = tmp$_1.next();
                var tmp$_2;
                if ((tmp$_2 = element_1.characteristicUuid) != null ? tmp$_2.equals(characteristic.characteristicUuid) : null) {
                  first$result_0 = element_1;
                  break first$break;
                }}
              throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
            }
             while (false);
            this.local$platformCharacteristic = first$result_0;
            this.local$$receiver = this.local$platformCharacteristic.bluetoothRemoteGATTCharacteristic;
            this.state_0 = 4;
            this.result_0 = await_0(this.local$$receiver.startNotifications(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$$receiver.addEventListener(CHARACTERISTIC_VALUE_CHANGED, this.$this.createListener_0(this.local$platformCharacteristic));
            this.state_0 = 3;
            continue;
          case 5:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Observers.prototype.rewire_o0vhv5$ = function (services_0, continuation_0, suspended) {
    var instance = new Coroutine$rewire_o0vhv5$(this, services_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Observers.prototype.clear = function () {
    this.observers_0.clear();
  };
  function Observers$createListener$lambda(this$Observers, this$createListener) {
    return function (event) {
      var tmp$;
      var target = Kotlin.isType(tmp$ = event.target, BluetoothRemoteGATTCharacteristic) ? tmp$ : throwCCE();
      this$Observers.changes_0.tryEmit_11rb$(new CharacteristicChange(this$createListener, ensureNotNull(target.value)));
      return Unit;
    };
  }
  Observers.prototype.createListener_0 = function ($receiver) {
    return Observers$createListener$lambda(this, $receiver);
  };
  Observers.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Observers',
    interfaces: []
  };
  function Options(optionalServices, filters) {
    if (optionalServices === void 0) {
      optionalServices = [];
    }if (filters === void 0)
      filters = null;
    this.optionalServices = optionalServices;
    this.filters = filters;
  }
  function Options$Filter() {
  }
  function Options$Filter$Name(name) {
    Options$Filter.call(this);
    this.name = name;
  }
  Options$Filter$Name.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Name',
    interfaces: [Options$Filter]
  };
  Options$Filter$Name.prototype.component1 = function () {
    return this.name;
  };
  Options$Filter$Name.prototype.copy_61zpoe$ = function (name) {
    return new Options$Filter$Name(name === void 0 ? this.name : name);
  };
  Options$Filter$Name.prototype.toString = function () {
    return 'Name(name=' + Kotlin.toString(this.name) + ')';
  };
  Options$Filter$Name.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Options$Filter$Name.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Options$Filter$NamePrefix(namePrefix) {
    Options$Filter.call(this);
    this.namePrefix = namePrefix;
  }
  Options$Filter$NamePrefix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamePrefix',
    interfaces: [Options$Filter]
  };
  Options$Filter$NamePrefix.prototype.component1 = function () {
    return this.namePrefix;
  };
  Options$Filter$NamePrefix.prototype.copy_61zpoe$ = function (namePrefix) {
    return new Options$Filter$NamePrefix(namePrefix === void 0 ? this.namePrefix : namePrefix);
  };
  Options$Filter$NamePrefix.prototype.toString = function () {
    return 'NamePrefix(namePrefix=' + Kotlin.toString(this.namePrefix) + ')';
  };
  Options$Filter$NamePrefix.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namePrefix) | 0;
    return result;
  };
  Options$Filter$NamePrefix.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.namePrefix, other.namePrefix))));
  };
  function Options$Filter$Services(services) {
    Options$Filter.call(this);
    this.services = services;
  }
  Options$Filter$Services.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, Options$Filter$Services) ? tmp$ : throwCCE();
    if (!contentEquals(this.services, other.services))
      return false;
    return true;
  };
  Options$Filter$Services.prototype.hashCode = function () {
    return contentHashCode(this.services);
  };
  Options$Filter$Services.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Services',
    interfaces: [Options$Filter]
  };
  Options$Filter$Services.prototype.component1 = function () {
    return this.services;
  };
  Options$Filter$Services.prototype.copy_kand9s$ = function (services) {
    return new Options$Filter$Services(services === void 0 ? this.services : services);
  };
  Options$Filter$Services.prototype.toString = function () {
    return 'Services(services=' + Kotlin.toString(this.services) + ')';
  };
  Options$Filter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Filter',
    interfaces: []
  };
  Options.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, Options) ? tmp$ : throwCCE();
    if (!contentEquals(this.optionalServices, other.optionalServices))
      return false;
    if (this.filters != null) {
      if (other.filters == null)
        return false;
      if (!contentEquals(this.filters, other.filters))
        return false;
    } else if (other.filters != null) {
      return false;
    }return true;
  };
  Options.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    var result = contentHashCode(this.optionalServices);
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.filters) != null ? contentHashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
    return result;
  };
  Options.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Options',
    interfaces: []
  };
  Options.prototype.component1 = function () {
    return this.optionalServices;
  };
  Options.prototype.component2 = function () {
    return this.filters;
  };
  Options.prototype.copy_m67bct$ = function (optionalServices, filters) {
    return new Options(optionalServices === void 0 ? this.optionalServices : optionalServices, filters === void 0 ? this.filters : filters);
  };
  Options.prototype.toString = function () {
    return 'Options(optionalServices=' + Kotlin.toString(this.optionalServices) + (', filters=' + Kotlin.toString(this.filters)) + ')';
  };
  function unsafeFlow$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$.prototype.constructor = Coroutine$collect_42ocv1$;
  Coroutine$collect_42ocv1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  unsafeFlow$ObjectLiteral.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda;
  Coroutine$unsafeTransform$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function unsafeTransform$lambda$lambda(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
    function collect$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
    }
    collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      return this.closure$action(value, continuation);
    };
    collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$this$unsafeTransform = this$unsafeTransform_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
    Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda(this.local$closure$transform, this.local$$receiver)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$transform_0, this$unsafeTransform_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda.prototype.constructor = Coroutine$map$lambda;
  Coroutine$map$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.emit_11rb$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function map$lambda(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var GATT_SERVER_DISCONNECTED;
  function peripheral($receiver, advertisement) {
    return peripheral_0($receiver, advertisement.bluetoothDevice_8be2vx$);
  }
  function peripheral_0($receiver, bluetoothDevice) {
    return new JsPeripheral($receiver.coroutineContext, bluetoothDevice);
  }
  function JsPeripheral(parentCoroutineContext, bluetoothDevice) {
    this.bluetoothDevice_0 = bluetoothDevice;
    var $receiver = Job(get_job(parentCoroutineContext));
    $receiver.invokeOnCompletion_f05bi3$(JsPeripheral$job$lambda$lambda(this));
    this.job_0 = $receiver;
    this.scope_0 = CoroutineScope(parentCoroutineContext.plus_1fupul$(this.job_0));
    this._state_0 = MutableStateFlow(null);
    this.state_5byfca$_0 = filterNotNull(this._state_0);
    this.platformServices_0 = null;
    this.connectJob_0 = null;
    this.observers_0 = new Observers(this);
    this.isDisconnectedListenerRegistered_0 = false;
    this.disconnectedListener_0 = JsPeripheral$disconnectedListener$lambda(this);
  }
  Object.defineProperty(JsPeripheral.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.state_5byfca$_0;
    }
  });
  Object.defineProperty(JsPeripheral.prototype, 'services', {
    configurable: true,
    get: function () {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this.platformServices_0) != null) {
        var destination = ArrayList_init(collectionSizeOrDefault(tmp$, 10));
        var tmp$_1;
        tmp$_1 = tmp$.iterator();
        while (tmp$_1.hasNext()) {
          var item = tmp$_1.next();
          destination.add_11rb$(toDiscoveredService(item));
        }
        tmp$_0 = destination;
      } else
        tmp$_0 = null;
      return tmp$_0;
    }
  });
  JsPeripheral.prototype.rssi = function (continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  Object.defineProperty(JsPeripheral.prototype, 'gatt_0', {
    configurable: true,
    get: function () {
      return ensureNotNull(this.bluetoothDevice_0.gatt);
    }
  });
  function Coroutine$JsPeripheral$createConnectJob$lambda(this$JsPeripheral_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$this$JsPeripheral = this$JsPeripheral_0;
  }
  Coroutine$JsPeripheral$createConnectJob$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsPeripheral$createConnectJob$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsPeripheral$createConnectJob$lambda.prototype.constructor = Coroutine$JsPeripheral$createConnectJob$lambda;
  Coroutine$JsPeripheral$createConnectJob$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JsPeripheral._state_0.value = State$Connecting_getInstance();
            this.exceptionState_0 = 4;
            this.local$this$JsPeripheral.registerDisconnectedListener_0();
            this.state_0 = 1;
            this.result_0 = await_0(this.local$this$JsPeripheral.gatt_0.connect(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$this$JsPeripheral._state_0.value = State$Connected_getInstance();
            this.state_0 = 2;
            this.result_0 = this.local$this$JsPeripheral.discoverServices_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            var services = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$JsPeripheral.observers_0.rewire_o0vhv5$(services, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          case 4:
            this.exceptionState_0 = 6;
            var cancellation = this.exception_0;
            if (Kotlin.isType(cancellation, CancellationException)) {
              this.local$this$JsPeripheral.disconnectGatt_0();
              throw cancellation;
            } else
              throw cancellation;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsPeripheral$createConnectJob$lambda(this$JsPeripheral_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsPeripheral$createConnectJob$lambda(this$JsPeripheral_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsPeripheral.prototype.createConnectJob_0 = function () {
    return launch(this.scope_0, void 0, CoroutineStart.LAZY, JsPeripheral$createConnectJob$lambda(this));
  };
  JsPeripheral.prototype.dispose_0 = function () {
    this.observers_0.clear();
    this.disconnectGatt_0();
    this.unregisterDisconnectedListener_0();
    this._state_0.value = new State$Disconnected();
  };
  function Coroutine$connect($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$connect.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$connect.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$connect.prototype.constructor = Coroutine$connect;
  Coroutine$connect.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (!get_isNotCancelled(this.$this.job_0)) {
              var message = 'Cannot connect, scope is cancelled for ' + this.$this;
              throw IllegalStateException_init(message.toString());
            }
            var tmp$_0;
            if ((tmp$ = this.$this.connectJob_0) != null)
              tmp$_0 = tmp$;
            else {
              var $receiver = this.$this.createConnectJob_0();
              this.$this.connectJob_0 = $receiver;
              tmp$_0 = $receiver;
            }

            var job = tmp$_0;
            this.state_0 = 2;
            this.result_0 = job.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsPeripheral.prototype.connect = function (continuation_0, suspended) {
    var instance = new Coroutine$connect(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$disconnect($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$disconnect.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$disconnect.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$disconnect.prototype.constructor = Coroutine$disconnect;
  Coroutine$disconnect.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = cancelAndJoinChildren(this.$this.job_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.connectJob_0 = null;
            this.$this.disconnectGatt_0();
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsPeripheral.prototype.disconnect = function (continuation_0, suspended) {
    var instance = new Coroutine$disconnect(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JsPeripheral.prototype.disconnectGatt_0 = function () {
    var tmp$;
    this._state_0.value = State$Disconnecting_getInstance();
    (tmp$ = this.bluetoothDevice_0.gatt) != null ? (tmp$.disconnect(), Unit) : null;
  };
  function Coroutine$discoverServices_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$discoverServices_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$discoverServices_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$discoverServices_0.prototype.constructor = Coroutine$discoverServices_0;
  Coroutine$discoverServices_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.$this.gatt_0.getPrimaryServices(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver = this.result_0;
            this.local$destination = ArrayList_init(this.local$$receiver.length);
            this.local$tmp$ = 0;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$tmp$ === this.local$$receiver.length) {
              this.state_0 = 6;
              continue;
            }
            var item = this.local$$receiver[this.local$tmp$];
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 4;
            this.result_0 = toPlatformService(item, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 5;
            continue;
          case 5:
            ++this.local$tmp$;
            this.state_0 = 3;
            continue;
          case 6:
            var services = this.local$destination;
            this.$this.platformServices_0 = services;
            return services;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsPeripheral.prototype.discoverServices_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$discoverServices_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$write_a3veb4$$default($this, characteristic_0, data_0, writeType_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$characteristic = characteristic_0;
    this.local$data = data_0;
    this.local$writeType = writeType_0;
  }
  Coroutine$write_a3veb4$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$write_a3veb4$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$write_a3veb4$$default.prototype.constructor = Coroutine$write_a3veb4$$default;
  Coroutine$write_a3veb4$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.bluetoothRemoteGATTCharacteristicFrom_woi46e$(this.local$characteristic);
            var block$result;
            block$break: do {
              switch (this.local$writeType.name) {
                case 'WithResponse':
                  block$result = $receiver.writeValueWithResponse(this.local$data);
                  break block$break;
                case 'WithoutResponse':
                  block$result = $receiver.writeValueWithResponse(this.local$data);
                  break block$break;
                default:block$result = Kotlin.noWhenBranchMatched();
                  break block$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = await_0(block$result, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsPeripheral.prototype.write_a3veb4$$default = function (characteristic_0, data_0, writeType_0, continuation_0, suspended) {
    var instance = new Coroutine$write_a3veb4$$default(this, characteristic_0, data_0, writeType_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JsPeripheral.prototype.readAsDataView_1m72hp$ = function (characteristic, continuation) {
    return await_0(this.bluetoothRemoteGATTCharacteristicFrom_woi46e$(characteristic).readValue(), continuation);
  };
  function Coroutine$read_1m72hp$($this, characteristic_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$characteristic = characteristic_0;
  }
  Coroutine$read_1m72hp$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_1m72hp$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_1m72hp$.prototype.constructor = Coroutine$read_1m72hp$;
  Coroutine$read_1m72hp$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.readAsDataView_1m72hp$(this.local$characteristic, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return toByteArray(this.result_0.buffer);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsPeripheral.prototype.read_1m72hp$ = function (characteristic_0, continuation_0, suspended) {
    var instance = new Coroutine$read_1m72hp$(this, characteristic_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$write_b8fgu1$($this, descriptor_0, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$descriptor = descriptor_0;
    this.local$data = data_0;
  }
  Coroutine$write_b8fgu1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$write_b8fgu1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$write_b8fgu1$.prototype.constructor = Coroutine$write_b8fgu1$;
  Coroutine$write_b8fgu1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.$this.bluetoothRemoteGATTDescriptorFrom_0(this.local$descriptor).writeValue(this.local$data), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsPeripheral.prototype.write_b8fgu1$ = function (descriptor_0, data_0, continuation_0, suspended) {
    var instance = new Coroutine$write_b8fgu1$(this, descriptor_0, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JsPeripheral.prototype.readAsDataView_a3rsdz$ = function (descriptor, continuation) {
    return await_0(this.bluetoothRemoteGATTDescriptorFrom_0(descriptor).readValue(), continuation);
  };
  function Coroutine$read_a3rsdz$($this, descriptor_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$descriptor = descriptor_0;
  }
  Coroutine$read_a3rsdz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_a3rsdz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_a3rsdz$.prototype.constructor = Coroutine$read_a3rsdz$;
  Coroutine$read_a3rsdz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.readAsDataView_a3rsdz$(this.local$descriptor, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return toByteArray(this.result_0.buffer);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsPeripheral.prototype.read_a3rsdz$ = function (descriptor_0, continuation_0, suspended) {
    var instance = new Coroutine$read_a3rsdz$(this, descriptor_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JsPeripheral.prototype.observeDataView_1m72hp$ = function (characteristic) {
    return this.observers_0.acquire_1m72hp$(characteristic);
  };
  function Coroutine$JsPeripheral$observe$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$JsPeripheral$observe$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsPeripheral$observe$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsPeripheral$observe$lambda.prototype.constructor = Coroutine$JsPeripheral$observe$lambda;
  Coroutine$JsPeripheral$observe$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return toByteArray(this.local$it.buffer);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsPeripheral$observe$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$JsPeripheral$observe$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  JsPeripheral.prototype.observe_1m72hp$ = function (characteristic) {
    var $receiver = this.observeDataView_1m72hp$(characteristic);
    return new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(JsPeripheral$observe$lambda), $receiver));
  };
  JsPeripheral.prototype.bluetoothRemoteGATTCharacteristicFrom_woi46e$ = function (characteristic) {
    var value = this.platformServices_0;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Services have not been discovered for ' + this;
      throw IllegalStateException_init(message.toString());
    } else {
      checkNotNull$result = value;
    }
    var services = checkNotNull$result;
    var first$result;
    first$break: do {
      var tmp$;
      tmp$ = services.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        if ((tmp$_0 = element.serviceUuid) != null ? tmp$_0.equals(characteristic.serviceUuid) : null) {
          first$result = element;
          break first$break;
        }}
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    var characteristics = first$result.characteristics;
    var first$result_0;
    first$break: do {
      var tmp$_1;
      tmp$_1 = characteristics.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        var tmp$_2;
        if ((tmp$_2 = element_0.characteristicUuid) != null ? tmp$_2.equals(characteristic.characteristicUuid) : null) {
          first$result_0 = element_0;
          break first$break;
        }}
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    return first$result_0.bluetoothRemoteGATTCharacteristic;
  };
  JsPeripheral.prototype.bluetoothRemoteGATTDescriptorFrom_0 = function (descriptor) {
    var value = this.platformServices_0;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Services have not been discovered for ' + this;
      throw IllegalStateException_init(message.toString());
    } else {
      checkNotNull$result = value;
    }
    var services = checkNotNull$result;
    var first$result;
    first$break: do {
      var tmp$;
      tmp$ = services.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        if ((tmp$_0 = element.serviceUuid) != null ? tmp$_0.equals(descriptor.serviceUuid) : null) {
          first$result = element;
          break first$break;
        }}
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    var characteristics = first$result.characteristics;
    var first$result_0;
    first$break: do {
      var tmp$_1;
      tmp$_1 = characteristics.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        var tmp$_2;
        if ((tmp$_2 = element_0.characteristicUuid) != null ? tmp$_2.equals(descriptor.characteristicUuid) : null) {
          first$result_0 = element_0;
          break first$break;
        }}
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    var descriptors = first$result_0.descriptors;
    var first$result_1;
    first$break: do {
      var tmp$_3;
      tmp$_3 = descriptors.iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        var tmp$_4;
        if ((tmp$_4 = element_1.descriptorUuid) != null ? tmp$_4.equals(descriptor.descriptorUuid) : null) {
          first$result_1 = element_1;
          break first$break;
        }}
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    return first$result_1.bluetoothRemoteGATTDescriptor;
  };
  JsPeripheral.prototype.registerDisconnectedListener_0 = function () {
    if (this.isDisconnectedListenerRegistered_0)
      return;
    this.isDisconnectedListenerRegistered_0 = true;
    this.bluetoothDevice_0.addEventListener(GATT_SERVER_DISCONNECTED, this.disconnectedListener_0);
  };
  JsPeripheral.prototype.unregisterDisconnectedListener_0 = function () {
    this.isDisconnectedListenerRegistered_0 = false;
    this.bluetoothDevice_0.removeEventListener(GATT_SERVER_DISCONNECTED, this.disconnectedListener_0);
  };
  JsPeripheral.prototype.toString = function () {
    return 'Peripheral(bluetoothDevice=' + string(this.bluetoothDevice_0) + ')';
  };
  function JsPeripheral$job$lambda$lambda(this$JsPeripheral) {
    return function (it) {
      this$JsPeripheral.dispose_0();
      return Unit;
    };
  }
  function JsPeripheral$disconnectedListener$lambda(this$JsPeripheral) {
    return function (event) {
      console.dir(event);
      this$JsPeripheral.observers_0.invalidate();
      this$JsPeripheral._state_0.value = new State$Disconnected();
      this$JsPeripheral.unregisterDisconnectedListener_0();
      this$JsPeripheral.connectJob_0 = null;
      return Unit;
    };
  }
  JsPeripheral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsPeripheral',
    interfaces: [Peripheral]
  };
  function toByteArray($receiver) {
    return new Int8Array($receiver);
  }
  function PlatformCharacteristic(serviceUuid, characteristicUuid, bluetoothRemoteGATTCharacteristic, descriptors) {
    this.serviceUuid_2jltjy$_0 = serviceUuid;
    this.characteristicUuid_6ezv2k$_0 = characteristicUuid;
    this.bluetoothRemoteGATTCharacteristic = bluetoothRemoteGATTCharacteristic;
    this.descriptors = descriptors;
  }
  Object.defineProperty(PlatformCharacteristic.prototype, 'serviceUuid', {
    get: function () {
      return this.serviceUuid_2jltjy$_0;
    }
  });
  Object.defineProperty(PlatformCharacteristic.prototype, 'characteristicUuid', {
    get: function () {
      return this.characteristicUuid_6ezv2k$_0;
    }
  });
  PlatformCharacteristic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformCharacteristic',
    interfaces: [Characteristic]
  };
  PlatformCharacteristic.prototype.component1 = function () {
    return this.serviceUuid;
  };
  PlatformCharacteristic.prototype.component2 = function () {
    return this.characteristicUuid;
  };
  PlatformCharacteristic.prototype.component3 = function () {
    return this.bluetoothRemoteGATTCharacteristic;
  };
  PlatformCharacteristic.prototype.component4 = function () {
    return this.descriptors;
  };
  PlatformCharacteristic.prototype.copy_t0faaf$ = function (serviceUuid, characteristicUuid, bluetoothRemoteGATTCharacteristic, descriptors) {
    return new PlatformCharacteristic(serviceUuid === void 0 ? this.serviceUuid : serviceUuid, characteristicUuid === void 0 ? this.characteristicUuid : characteristicUuid, bluetoothRemoteGATTCharacteristic === void 0 ? this.bluetoothRemoteGATTCharacteristic : bluetoothRemoteGATTCharacteristic, descriptors === void 0 ? this.descriptors : descriptors);
  };
  PlatformCharacteristic.prototype.toString = function () {
    return 'PlatformCharacteristic(serviceUuid=' + Kotlin.toString(this.serviceUuid) + (', characteristicUuid=' + Kotlin.toString(this.characteristicUuid)) + (', bluetoothRemoteGATTCharacteristic=' + Kotlin.toString(this.bluetoothRemoteGATTCharacteristic)) + (', descriptors=' + Kotlin.toString(this.descriptors)) + ')';
  };
  PlatformCharacteristic.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.serviceUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.characteristicUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.bluetoothRemoteGATTCharacteristic) | 0;
    result = result * 31 + Kotlin.hashCode(this.descriptors) | 0;
    return result;
  };
  PlatformCharacteristic.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.serviceUuid, other.serviceUuid) && Kotlin.equals(this.characteristicUuid, other.characteristicUuid) && Kotlin.equals(this.bluetoothRemoteGATTCharacteristic, other.bluetoothRemoteGATTCharacteristic) && Kotlin.equals(this.descriptors, other.descriptors)))));
  };
  function toDiscoveredCharacteristic($receiver) {
    var tmp$ = $receiver.serviceUuid;
    var tmp$_0 = $receiver.characteristicUuid;
    var $receiver_0 = $receiver.descriptors;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(toLazyDescriptor(item));
    }
    return new DiscoveredCharacteristic(tmp$, tmp$_0, destination);
  }
  function Coroutine$toPlatformCharacteristic($receiver_0, serviceUuid_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$characteristicUuid = void 0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$serviceUuid = serviceUuid_0;
  }
  Coroutine$toPlatformCharacteristic.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toPlatformCharacteristic.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toPlatformCharacteristic.prototype.constructor = Coroutine$toPlatformCharacteristic;
  Coroutine$toPlatformCharacteristic.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$characteristicUuid = toUuid(this.local$$receiver.uuid);
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.local$$receiver.getDescriptors(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$ = new Result(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$tmp$ = new Result(createFailure(e_0));
            } else
              throw e_0;
            this.state_0 = 3;
            continue;
          case 3:
            var $receiver = this.local$tmp$;
            var tmp$;
            if ((tmp$ = $receiver.exceptionOrNull()) != null) {
              console.warn(tmp$);
            }
            var defaultValue = [];
            var getOrDefault$result;
            getOrDefault$break: do {
              var tmp$_0;
              if ($receiver.isFailure) {
                getOrDefault$result = defaultValue;
                break getOrDefault$break;
              }getOrDefault$result = (tmp$_0 = $receiver.value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
            }
             while (false);
            var descriptors = getOrDefault$result;
            var destination = ArrayList_init(descriptors.length);
            var tmp$_1;
            for (tmp$_1 = 0; tmp$_1 !== descriptors.length; ++tmp$_1) {
              var item = descriptors[tmp$_1];
              var tmp$_2 = destination.add_11rb$;
              console.dir(item);
              tmp$_2.call(destination, toPlatformDescriptor(item, this.local$serviceUuid, this.local$characteristicUuid));
            }

            var platformDescriptors = destination;
            return new PlatformCharacteristic(this.local$serviceUuid, this.local$characteristicUuid, this.local$$receiver, platformDescriptors);
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toPlatformCharacteristic($receiver_0, serviceUuid_0, continuation_0, suspended) {
    var instance = new Coroutine$toPlatformCharacteristic($receiver_0, serviceUuid_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function PlatformDescriptor(serviceUuid, characteristicUuid, descriptorUuid, bluetoothRemoteGATTDescriptor) {
    this.serviceUuid_wu5qcy$_0 = serviceUuid;
    this.characteristicUuid_cr13kw$_0 = characteristicUuid;
    this.descriptorUuid_qi58gc$_0 = descriptorUuid;
    this.bluetoothRemoteGATTDescriptor = bluetoothRemoteGATTDescriptor;
  }
  Object.defineProperty(PlatformDescriptor.prototype, 'serviceUuid', {
    get: function () {
      return this.serviceUuid_wu5qcy$_0;
    }
  });
  Object.defineProperty(PlatformDescriptor.prototype, 'characteristicUuid', {
    get: function () {
      return this.characteristicUuid_cr13kw$_0;
    }
  });
  Object.defineProperty(PlatformDescriptor.prototype, 'descriptorUuid', {
    get: function () {
      return this.descriptorUuid_qi58gc$_0;
    }
  });
  PlatformDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformDescriptor',
    interfaces: [Descriptor]
  };
  PlatformDescriptor.prototype.component1 = function () {
    return this.serviceUuid;
  };
  PlatformDescriptor.prototype.component2 = function () {
    return this.characteristicUuid;
  };
  PlatformDescriptor.prototype.component3 = function () {
    return this.descriptorUuid;
  };
  PlatformDescriptor.prototype.component4 = function () {
    return this.bluetoothRemoteGATTDescriptor;
  };
  PlatformDescriptor.prototype.copy_9uud7f$ = function (serviceUuid, characteristicUuid, descriptorUuid, bluetoothRemoteGATTDescriptor) {
    return new PlatformDescriptor(serviceUuid === void 0 ? this.serviceUuid : serviceUuid, characteristicUuid === void 0 ? this.characteristicUuid : characteristicUuid, descriptorUuid === void 0 ? this.descriptorUuid : descriptorUuid, bluetoothRemoteGATTDescriptor === void 0 ? this.bluetoothRemoteGATTDescriptor : bluetoothRemoteGATTDescriptor);
  };
  PlatformDescriptor.prototype.toString = function () {
    return 'PlatformDescriptor(serviceUuid=' + Kotlin.toString(this.serviceUuid) + (', characteristicUuid=' + Kotlin.toString(this.characteristicUuid)) + (', descriptorUuid=' + Kotlin.toString(this.descriptorUuid)) + (', bluetoothRemoteGATTDescriptor=' + Kotlin.toString(this.bluetoothRemoteGATTDescriptor)) + ')';
  };
  PlatformDescriptor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.serviceUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.characteristicUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.descriptorUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.bluetoothRemoteGATTDescriptor) | 0;
    return result;
  };
  PlatformDescriptor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.serviceUuid, other.serviceUuid) && Kotlin.equals(this.characteristicUuid, other.characteristicUuid) && Kotlin.equals(this.descriptorUuid, other.descriptorUuid) && Kotlin.equals(this.bluetoothRemoteGATTDescriptor, other.bluetoothRemoteGATTDescriptor)))));
  };
  function toLazyDescriptor($receiver) {
    return new LazyDescriptor($receiver.serviceUuid, $receiver.characteristicUuid, $receiver.descriptorUuid);
  }
  function toPlatformDescriptor($receiver, serviceUuid, characteristicUuid) {
    return new PlatformDescriptor(serviceUuid, characteristicUuid, toUuid($receiver.uuid), $receiver);
  }
  function PlatformService(serviceUuid, bluetoothRemoteGATTService, characteristics) {
    this.serviceUuid_pnb40y$_0 = serviceUuid;
    this.bluetoothRemoteGATTService = bluetoothRemoteGATTService;
    this.characteristics = characteristics;
  }
  Object.defineProperty(PlatformService.prototype, 'serviceUuid', {
    get: function () {
      return this.serviceUuid_pnb40y$_0;
    }
  });
  PlatformService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformService',
    interfaces: [Service]
  };
  PlatformService.prototype.component1 = function () {
    return this.serviceUuid;
  };
  PlatformService.prototype.component2 = function () {
    return this.bluetoothRemoteGATTService;
  };
  PlatformService.prototype.component3 = function () {
    return this.characteristics;
  };
  PlatformService.prototype.copy_881ojc$ = function (serviceUuid, bluetoothRemoteGATTService, characteristics) {
    return new PlatformService(serviceUuid === void 0 ? this.serviceUuid : serviceUuid, bluetoothRemoteGATTService === void 0 ? this.bluetoothRemoteGATTService : bluetoothRemoteGATTService, characteristics === void 0 ? this.characteristics : characteristics);
  };
  PlatformService.prototype.toString = function () {
    return 'PlatformService(serviceUuid=' + Kotlin.toString(this.serviceUuid) + (', bluetoothRemoteGATTService=' + Kotlin.toString(this.bluetoothRemoteGATTService)) + (', characteristics=' + Kotlin.toString(this.characteristics)) + ')';
  };
  PlatformService.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.serviceUuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.bluetoothRemoteGATTService) | 0;
    result = result * 31 + Kotlin.hashCode(this.characteristics) | 0;
    return result;
  };
  PlatformService.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.serviceUuid, other.serviceUuid) && Kotlin.equals(this.bluetoothRemoteGATTService, other.bluetoothRemoteGATTService) && Kotlin.equals(this.characteristics, other.characteristics)))));
  };
  function toDiscoveredService($receiver) {
    var tmp$ = $receiver.serviceUuid;
    var $receiver_0 = $receiver.characteristics;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(toDiscoveredCharacteristic(item));
    }
    return new DiscoveredService(tmp$, destination);
  }
  function Coroutine$toPlatformService($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$serviceUuid = void 0;
    this.local$$receiver_0 = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toPlatformService.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toPlatformService.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toPlatformService.prototype.constructor = Coroutine$toPlatformService;
  Coroutine$toPlatformService.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$serviceUuid = toUuid(this.local$$receiver.uuid);
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.getCharacteristics(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0 = this.result_0;
            this.local$destination = ArrayList_init(this.local$$receiver_0.length);
            this.local$tmp$ = 0;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$tmp$ === this.local$$receiver_0.length) {
              this.state_0 = 6;
              continue;
            }
            var item = this.local$$receiver_0[this.local$tmp$];
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            console.dir(item);
            this.state_0 = 4;
            this.result_0 = toPlatformCharacteristic(item, this.local$serviceUuid, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 5;
            continue;
          case 5:
            ++this.local$tmp$;
            this.state_0 = 3;
            continue;
          case 6:
            var characteristics = this.local$destination;
            return new PlatformService(this.local$serviceUuid, this.local$$receiver, characteristics);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toPlatformService($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toPlatformService($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var ADVERTISEMENT_RECEIVED_EVENT;
  function Scanner_0() {
    return new JsScanner(get_bluetooth(), new Options());
  }
  function JsScanner(bluetooth, options) {
    this.supportsScanning_0 = window.navigator.bluetooth.requestLEScan != null;
    this.advertisements_mhodbf$_0 = callbackFlow(JsScanner$advertisements$lambda(this, bluetooth, options));
  }
  Object.defineProperty(JsScanner.prototype, 'advertisements', {
    configurable: true,
    get: function () {
      return this.advertisements_mhodbf$_0;
    }
  });
  function JsScanner$advertisements$lambda$lambda(this$) {
    return function (it) {
      var tmp$;
      var event = Kotlin.isType(tmp$ = it, BluetoothAdvertisingEvent) ? tmp$ : throwCCE();
      this$.offer_11rb$(new Advertisement(event.device, event.rssi));
      return Unit;
    };
  }
  function JsScanner$advertisements$lambda$lambda_0(closure$scan, closure$bluetooth, closure$listener) {
    return function () {
      closure$scan.stop();
      closure$bluetooth.removeEventListener(ADVERTISEMENT_RECEIVED_EVENT, closure$listener);
      return Unit;
    };
  }
  function Coroutine$JsScanner$advertisements$lambda(this$JsScanner_0, closure$bluetooth_0, closure$options_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsScanner = this$JsScanner_0;
    this.local$closure$bluetooth = closure$bluetooth_0;
    this.local$closure$options = closure$options_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$JsScanner$advertisements$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsScanner$advertisements$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsScanner$advertisements$lambda.prototype.constructor = Coroutine$JsScanner$advertisements$lambda;
  Coroutine$JsScanner$advertisements$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!this.local$this$JsScanner.supportsScanning_0) {
              var message = 'Scanning unavailable';
              throw IllegalStateException_init(message.toString());
            }
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$bluetooth.requestLEScan(toDynamic_0(this.local$closure$options)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var scan = this.result_0;
            var listener = JsScanner$advertisements$lambda$lambda(this.local$$receiver);
            this.local$closure$bluetooth.addEventListener(ADVERTISEMENT_RECEIVED_EVENT, listener);
            this.state_0 = 3;
            this.result_0 = awaitClose(this.local$$receiver, JsScanner$advertisements$lambda$lambda_0(scan, this.local$closure$bluetooth, listener), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsScanner$advertisements$lambda(this$JsScanner_0, closure$bluetooth_0, closure$options_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsScanner$advertisements$lambda(this$JsScanner_0, closure$bluetooth_0, closure$options_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  JsScanner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsScanner',
    interfaces: [Scanner]
  };
  function toDynamic$ObjectLiteral_1() {
    this.acceptAllAdvertisements = true;
    this.keepRepeatedDevices = false;
  }
  toDynamic$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function toDynamic$ObjectLiteral_2(this$toDynamic) {
    this.keepRepeatedDevices = false;
    this.filters = this$toDynamic.filters;
  }
  toDynamic$ObjectLiteral_2.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function toDynamic_0($receiver) {
    if ($receiver.filters == null) {
      return new toDynamic$ObjectLiteral_1();
    } else {
      return new toDynamic$ObjectLiteral_2($receiver);
    }
  }
  function toUuid($receiver) {
    return uuidFrom($receiver);
  }
  function string($receiver) {
    var tmp$;
    return 'BluetoothDevice(id=' + $receiver.id + ', name=' + toString($receiver.name) + ', gatt=' + toString((tmp$ = $receiver.gatt) != null ? string_0(tmp$) : null) + ')';
  }
  function string_0($receiver) {
    return 'BluetoothRemoteGATTServer(connected=' + $receiver.connected + ')';
  }
  var package$com = _.com || (_.com = {});
  var package$juul = package$com.juul || (package$com.juul = {});
  var package$kable = package$juul.kable || (package$juul.kable = {});
  package$kable.characteristicOf_puj7f4$ = characteristicOf;
  package$kable.Characteristic = Characteristic;
  package$kable.LazyCharacteristic = LazyCharacteristic;
  package$kable.DiscoveredCharacteristic = DiscoveredCharacteristic;
  package$kable.descriptorOf_6hosri$ = descriptorOf;
  package$kable.Descriptor = Descriptor;
  package$kable.LazyDescriptor = LazyDescriptor;
  package$kable.BluetoothLeException = BluetoothLeException;
  package$kable.ConnectionRejectedException = ConnectionRejectedException;
  package$kable.NotReadyException = NotReadyException;
  package$kable.GattStatusException = GattStatusException;
  package$kable.ConnectionLostException = ConnectionLostException;
  package$kable.launchIn_ef2lrx$ = launchIn;
  package$kable.get_isNotCancelled_8vd9in$ = get_isNotCancelled;
  package$kable.cancelAndJoinChildren_8vd9in$ = cancelAndJoinChildren;
  Object.defineProperty(WriteType, 'WithResponse', {
    get: WriteType$WithResponse_getInstance
  });
  Object.defineProperty(WriteType, 'WithoutResponse', {
    get: WriteType$WithoutResponse_getInstance
  });
  package$kable.WriteType = WriteType;
  package$kable.Peripheral = Peripheral;
  package$kable.Scanner = Scanner;
  package$kable.Service = Service;
  package$kable.DiscoveredService = DiscoveredService;
  Object.defineProperty(State, 'Connecting', {
    get: State$Connecting_getInstance
  });
  Object.defineProperty(State, 'Connected', {
    get: State$Connected_getInstance
  });
  Object.defineProperty(State, 'Disconnecting', {
    get: State$Disconnecting_getInstance
  });
  Object.defineProperty(State$Disconnected$Status, 'PeripheralDisconnected', {
    get: State$Disconnected$Status$PeripheralDisconnected_getInstance
  });
  Object.defineProperty(State$Disconnected$Status, 'Failed', {
    get: State$Disconnected$Status$Failed_getInstance
  });
  Object.defineProperty(State$Disconnected$Status, 'Timeout', {
    get: State$Disconnected$Status$Timeout_getInstance
  });
  Object.defineProperty(State$Disconnected$Status, 'UnknownDevice', {
    get: State$Disconnected$Status$UnknownDevice_getInstance
  });
  Object.defineProperty(State$Disconnected$Status, 'Cancelled', {
    get: State$Disconnected$Status$Cancelled_getInstance
  });
  Object.defineProperty(State$Disconnected$Status, 'ConnectionLimitReached', {
    get: State$Disconnected$Status$ConnectionLimitReached_getInstance
  });
  Object.defineProperty(State$Disconnected$Status, 'EncryptionTimedOut', {
    get: State$Disconnected$Status$EncryptionTimedOut_getInstance
  });
  State$Disconnected$Status.Unknown = State$Disconnected$Status$Unknown;
  State$Disconnected.Status = State$Disconnected$Status;
  State.Disconnected = State$Disconnected;
  package$kable.State = State;
  package$kable.Advertisement = Advertisement;
  Object.defineProperty(package$kable, 'bluetooth_8be2vx$', {
    get: get_bluetooth
  });
  package$kable.requestPeripheral_p69oml$ = requestPeripheral;
  package$kable.IOException = IOException;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$kable.Observers = Observers;
  Options$Filter.Name = Options$Filter$Name;
  Options$Filter.NamePrefix = Options$Filter$NamePrefix;
  Options$Filter.Services = Options$Filter$Services;
  Options.Filter = Options$Filter;
  package$kable.Options = Options;
  package$kable.peripheral_e46plg$ = peripheral;
  package$kable.peripheral_65psgl$ = peripheral_0;
  package$kable.JsPeripheral = JsPeripheral;
  package$kable.PlatformCharacteristic = PlatformCharacteristic;
  package$kable.toDiscoveredCharacteristic_jjt962$ = toDiscoveredCharacteristic;
  package$kable.toPlatformCharacteristic_hizakj$ = toPlatformCharacteristic;
  package$kable.PlatformDescriptor = PlatformDescriptor;
  package$kable.toLazyDescriptor_gms0se$ = toLazyDescriptor;
  package$kable.toPlatformDescriptor_dk87tu$ = toPlatformDescriptor;
  package$kable.PlatformService = PlatformService;
  package$kable.toDiscoveredService_m4v9q0$ = toDiscoveredService;
  package$kable.toPlatformService_ckqtg0$ = toPlatformService;
  package$kable.Scanner = Scanner_0;
  package$kable.JsScanner = JsScanner;
  package$kable.toUuid_7efafi$ = toUuid;
  var package$external = package$kable.external || (package$kable.external = {});
  package$external.string_ikzlsz$ = string;
  package$external.string_whfeae$ = string_0;
  JsPeripheral.prototype.write_a3veb4$ = Peripheral.prototype.write_a3veb4$;
  CHARACTERISTIC_VALUE_CHANGED = 'characteristicvaluechanged';
  GATT_SERVER_DISCONNECTED = 'gattserverdisconnected';
  ADVERTISEMENT_RECEIVED_EVENT = 'advertisementreceived';
  Kotlin.defineModule('kable-core', _);
  return _;
}));

//# sourceMappingURL=kable-core.js.map
