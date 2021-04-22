﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré par un outil.
//     Version du runtime :4.0.30319.42000
//
//     Les modifications apportées à ce fichier peuvent provoquer un comportement incorrect et seront perdues si
//     le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HeavyClient.RoutingBikeService {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="RoutingBikeService.IRoutingBikeService")]
    public interface IRoutingBikeService {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IRoutingBikeService/findPathsAsync", ReplyAction="http://tempuri.org/IRoutingBikeService/findPathsAsyncResponse")]
        string findPathsAsync(string location, string destination);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IRoutingBikeService/findPathsAsync", ReplyAction="http://tempuri.org/IRoutingBikeService/findPathsAsyncResponse")]
        System.Threading.Tasks.Task<string> findPathsAsyncAsync(string location, string destination);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IRoutingBikeService/getGlobalStat", ReplyAction="http://tempuri.org/IRoutingBikeService/getGlobalStatResponse")]
        string getGlobalStat();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IRoutingBikeService/getGlobalStat", ReplyAction="http://tempuri.org/IRoutingBikeService/getGlobalStatResponse")]
        System.Threading.Tasks.Task<string> getGlobalStatAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IRoutingBikeService/getStationStat", ReplyAction="http://tempuri.org/IRoutingBikeService/getStationStatResponse")]
        string getStationStat(string number);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IRoutingBikeService/getStationStat", ReplyAction="http://tempuri.org/IRoutingBikeService/getStationStatResponse")]
        System.Threading.Tasks.Task<string> getStationStatAsync(string number);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IRoutingBikeServiceChannel : HeavyClient.RoutingBikeService.IRoutingBikeService, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class RoutingBikeServiceClient : System.ServiceModel.ClientBase<HeavyClient.RoutingBikeService.IRoutingBikeService>, HeavyClient.RoutingBikeService.IRoutingBikeService {
        
        public RoutingBikeServiceClient() {
        }
        
        public RoutingBikeServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public RoutingBikeServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public RoutingBikeServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public RoutingBikeServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public string findPathsAsync(string location, string destination) {
            return base.Channel.findPathsAsync(location, destination);
        }
        
        public System.Threading.Tasks.Task<string> findPathsAsyncAsync(string location, string destination) {
            return base.Channel.findPathsAsyncAsync(location, destination);
        }
        
        public string getGlobalStat() {
            return base.Channel.getGlobalStat();
        }
        
        public System.Threading.Tasks.Task<string> getGlobalStatAsync() {
            return base.Channel.getGlobalStatAsync();
        }
        
        public string getStationStat(string number) {
            return base.Channel.getStationStat(number);
        }
        
        public System.Threading.Tasks.Task<string> getStationStatAsync(string number) {
            return base.Channel.getStationStatAsync(number);
        }
    }
}