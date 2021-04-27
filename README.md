# Let-s_Biking
Description du projet

Ce projet vous permet une utilisation optimale des vélos de JCDecaux lors de vos déplacements. La v1 de ce projet vous permet de faire des recherches sur la ville d’Amiens.
Il permet également de contrôler les recherches effectuées par les utilisateurs de l’application.


Setup

Démarrer les WebServices suivant :
Let-s_Biking\Launch_Routing\bin\Debug\Launch_Routing.exe (RoutingWithBikes)
Let-s_Biking\launch\bin\Debug\lauch.exe (WebProxy)

Lancer le Heavy Client :
Let-s_Biking\HeavyClient\bin\Debug\HeavyClient.exe

Lancer le Light Client :
Let-s_Biking\LightClient\client.html


Utilisation de l’application

Recherche dans le light client

Entrez une adresse de départ et une adresse d’arrivée dans les champs prévus à cet effet. Cliquez ensuite sur valider “validate”. Votre trajet s'affiche sur la carte. Le trajet en vert représente le à pied, le trajet bleu représente le trajet à vélo. Vous pouvez accéder aux indications plus précises en appuyant sur “Details”. Une fenêtre avec les instructions s’affiche sur l’écran, vous pouvez naviguer entre les différents trajet grâce au bouton “Step”. Si vous voulez fermer cette fenêtre, appuyez de nouveau sur “Details”.

Recherche dans le heavy client

Lorsque vous démarrez le heavy client vous arrivez dans la console utilisateur. Entrez “1” pour effectuer une recherche de la même façon que dans le light client. Cette fois seules les indications seront données dans la console.

Consultation statistique

Lorsque des requêtes ont été réalisées, vous pouvez consulter les statistiques d’utilisation des différentes stations. Si vous entrez “2” vous avez accès à l’ensemble des utilisations des stations JCDecaux. SI vous entrez “3”, vous devez renseigner le numéro de la station que vous voulez consulter. 


Données de test 

Départ : 15 rue Jean de la Fontaine, Amiens
Arrivée : 3 allée du verger, Amiens

Départ : 15 rue Jean de la Fontaine, Amiens
Arrivée : 39 Rue Maurice Ravel, Amiens

Départ : 4 Rue Babeuf, Amiens
Arrivée : 30 Chemin du Thil, Amiens

Départ : 3 allée du verger, Amiens
Arrivée : 39 Rue Maurice Ravel, Amiens


API REST

RoutingWithBikes

Rechercher un chemin entre deux positions pour utiliser les vélos de JCDecaux au maximum.

location : adresse de départ
destination : adresse d’arrivée

http://localhost:8733/Design_Time_Addresses/RoutingWithBikes/InfoStation/findPaths?location={location}&destination={destination}

ProxyWebService

Récupérer une station précise dans la base de JCDecaux via un proxy. Toutes les 60 secondes le cache se met à jour en cas de requête.

stationNumber : numéro de la station recherchée
contractName : nom du contrat auquel la station appartient

http://localhost:8733/Design_Time_Addresses/WebProxyService/ProxyService/Station?stationNumber={stationNumber}&contractName={contractName}

