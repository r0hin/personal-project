import 'package:flutter/material.dart';

import '../tabs/home.dart';
import '../tabs/direct.dart';
import '../tabs/account.dart';
import '../utils/placeholder.dart';

class MainPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _PageState();
  }
}

class _PageState extends State<MainPage> {
  int _currentIndex = 0;
  final List<Widget> _children = [
    HomeTab(),
    DirectPage(),
    AccountPage(),
  ];

  void onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Echo'),
      ),
      body: _children[_currentIndex], // new
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabTapped, // new
        currentIndex: _currentIndex, // new
        items: [
          new BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          new BottomNavigationBarItem(
            icon: Icon(Icons.mail),
            label: 'Direct',
          ),
          new BottomNavigationBarItem(
              icon: Icon(Icons.person), label: 'Account'),
        ],
      ),
    );
  }
}
