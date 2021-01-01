// import 'package:flutter/material.dart';
// import 'package:firebase_auth/firebase_auth.dart';

// // import 'page.dart';

// // FirebaseAuth auth = FirebaseAuth.instance;

// // FirebaseAuth.instance
//   // .authStateChanges()
//   // .listen((User user) {
//   //   if (user == null) {
//   //     print('User is currently signed out!');
//   //   } else {
//   //     print('User is signed in!');
//   //   }
//   // });

// class AuthHandler extends StatefulWidget {
//   @override
//   _AuthHandlerState createState() => _AuthHandlerState();
// }

// class _AuthHandlerState extends State<AuthHandler> {
//   @override
//   Widget build(BuildContext context) {
//     return FutureBuilder(
//       future: FirebaseAuth.,
//       builder: (context, snapshot) {
//         if (snapshot.hasError) {
//           // Could not connect
//           return new Text("Error occured", textDirection: TextDirection.ltr);
//         }
//         // Once complete, show your application
//         if (snapshot.connectionState == ConnectionState.done) {
//           // return MyApp();
//         }

//         return new Text("Loading", textDirection: TextDirection.ltr);
//       },
//     );
//   }
// }
