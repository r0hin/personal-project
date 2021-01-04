import 'package:flutter/material.dart';
import 'login.dart';
import 'page.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../utils/placeholder.dart';

// import 'page.dart';

// FirebaseAuth auth = FirebaseAuth.instance;

class AuthHandler extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return AuthHandlerState();
  }
}

class AuthHandlerState extends State<AuthHandler> {
  int _currentIndex = 2;

  void initState() {
    FirebaseAuth.instance.authStateChanges().listen((User user) {
      if (user == null) {
        _currentIndex = 1;
        onTabTapped(1);
        print('User is currently signed out!');
      } else {
        onTabTapped(0);
        print('User is signed in!');
      }
    });
    super.initState();
  }

  final List<Widget> _children = [
    MainPage(),
    LoginScreen(),
    PlaceholderWidget(Colors.blue),
  ];

  void onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _children[_currentIndex],
    );
  }
}
