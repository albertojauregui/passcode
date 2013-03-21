#!/usr/bin/perl -w

use strict;
use lib "../../perl-libs";#localhost
use CGI qw/:standard/;
use CGI::Carp qw(fatalsToBrowser);
use Digest::SHA qw(sha256_hex);

print header(-charset=>"utf8") . screen();

sub screen {
    my $passphrase = param("domain") . param("passwd");
    my $hash = sha256_hex($passphrase);
    return substr($hash,0,16);
}
