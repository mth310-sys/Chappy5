# アイムジャグラーEX

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: アイムジャグラーEX
formalModelName: アイムジャグラーEX
manufacturer: 北電子
releaseDate: 2007-01（パチビー: 2007-01-09 / 北電子回顧発言: 2007-01-07）
generation: 5号機初期
systemType: ノーマル / 完全告知 / ボーナス主体

## 性能コア

payoutRateBySetting:
- 設定1: 96.91%（パチマガスロマガ・シミュレート値）
- 設定2: 97.80%
- 設定3: 99.91%
- 設定4: 102.04%
- 設定5: 104.16%
- 設定6: 106.55%
- 注: 後年資料にはメーカー発表値として95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.2%等の別系統値も存在するため、定義の異なる値を平均せずCONFLICTとして保持。

initialHitBySetting:
- BIG
  - 設定1: 1/287.44
  - 設定2: 1/282.48
  - 設定3: 1/282.48
  - 設定4: 1/273.07
  - 設定5: 1/273.07
  - 設定6: 1/268.59
- REG
  - 設定1: 1/455.11
  - 設定2: 1/442.81
  - 設定3: 1/348.60
  - 設定4: 1/321.25
  - 設定5: 1/268.59
  - 設定6: 1/268.59
- ボーナス合算
  - 設定1: 1/176.17
  - 設定2: 1/172.46
  - 設定3: 1/156.04
  - 設定4: 1/147.60
  - 設定5: 1/135.40
  - 設定6: 1/134.30

baseGamesPer50:
- アイムジャグラー系のチェリー狙い基準: 設定1〜5 約34.5G/50枚、設定6 約35.8G/50枚（後年比較資料）。初代単独表記ではなくシリーズ系統値のため補助値として扱う。

netIncrease:
- 非該当（RT/ART/AT非搭載）。

basicPayout:
- BIG: 約324〜325枚
- REG: 約104枚

modeSpecificMinimumData:
- ボーナスのみで出玉を増やすノーマルタイプ。
- ART/RT等の付加機能なし。
- 天井・ゾーン・通常時モードを前提とするゲーム性ではない。

## resetBehavior

settingChangeBehavior:
- ノーマルタイプで、天井・ゲーム数モード・ART/AT状態を持たないため、設定変更による朝一専用天井短縮・モード恩恵は非該当。
- 設定変更後の1G目リール始動にわずかなガックン/ブレが発生するとの後年解析資料あり。ただし初代固有の一次資料確認はできていないためANALYSIS_SINGLE扱い。

carryOverBehavior:
- 据え置き時に引き継ぐ天井ゲーム数・モード・有利区間は非該当。
- ボーナス成立状態をまたいだ特殊なホール営業上の据え置き恩恵については本DB粒度では対象外。

powerCycleBehavior:
- 電源OFF→ONのみで朝一専用天井・モード・有利区間が発生する機種ではない。
- 電源ON/OFF固有の表示/BGM等の初代固有挙動は今回高信頼資料で確定できずUNVERIFIED。

gameCounterReset:
- 天井/内部ゲーム数管理がないため非該当。
- ホール側データカウンタの表示リセットとは別概念。

ceilingAfterReset:
- 天井なし。設定変更時の天井短縮も非該当。

modeAfterReset:
- 通常時モードなし。リセット専用モードなし。

stateAfterReset:
- ART/AT高確等の状態管理は非該当。

advantageousSectionReset:
- 非該当（有利区間制度導入前の5号機）。

resetBenefits:
- 公開された設定変更固有の朝一出玉恩恵は確認できず。天井・モード狙いの対象ではない。

resetPenalties:
- 公開された設定変更固有の主要不利要素は確認できず。

resetDetection:
- 朝一1G目のリール始動時にごく小さなガックン/ブレが見えるとの後年解析資料あり。初代は判別が難しいとの記載もあるため、強い確定要素として扱わない。

numericResetData:
- 天井: なし
- リセット時短縮天井: なし
- リセット専用モード数値: 非該当

## 出典

取得日: 2026-08-31

1. パチビー「アイムジャグラーEX」
   - https://www.pachibee.jp/machines/about/209080015
   - 信頼度: ANALYSIS_HIGH
   - 導入日2007-01-09、5号機ノーマル完全告知、RT/ART非搭載を確認。

2. パチマガスロマガ「ジャグラーミュージアム 5号機」
   - https://psmaga.com/special/juggler_museum/5goki.php
   - 信頼度: ANALYSIS_HIGH
   - 2007年1月、BIG約324枚、REG約104枚、設定別BIG/REG/合算、シミュレートPAYOUTを確認。

3. P-WORLD「アイムジャグラーEX 2007年」
   - https://www.p-world.co.jp/machine/database/4482
   - 信頼度: INDUSTRY
   - 北電子、5号機ノーマル完全告知、BIG約325枚、REG約104枚を確認。

4. K-Navi「2020年アイムジャグラーEX記者発表会」
   - https://p-kn.com/topics/exhibition/1886/
   - 信頼度: INDUSTRY
   - 北電子担当者の回顧として初代アイムジャグラーが2007-01-07リリースとの発言を確認。パチビーの導入日2007-01-09との差は原値保持。

5. SLOT HACK「ジャグラーコイン持ち一覧」
   - https://slothack.net/matome/17149/
   - 信頼度: ANALYSIS_SINGLE
   - 5号機アイムジャグラー系のチェリー狙い時コイン持ちとして設定1〜5 34.5G/50枚、設定6 35.8G/50枚を確認。初代単独値とは断定せず補助値扱い。

6. jugjug.net「アイムジャグラーEX（初代等）スペック解析」
   - https://jugjug.net/imjugglerex
   - 信頼度: ANALYSIS_SINGLE
   - 初代を含むページで朝一リールの微小なガックン/ブレ、設定別ボーナス確率を確認。リセット判別は補助情報として扱う。

7. pachinko’s blog「北電子 アイムジャグラーEX」
   - https://pachinko.hatenablog.jp/entry/2007/01/im-juggler-EX
   - 信頼度: ANALYSIS_SINGLE
   - 2007年1月、設定別BIG/REG/合算、別定義の出玉率を確認。機械割CONFLICT検出用途。

## missingFields

- 初代単独資料としての厳密なbaseGamesPer50（シリーズ系統値は補助取得済み）
- powerCycleBehaviorの初代固有表示/BGM挙動
- resetDetectionの初代一次/当時高信頼資料による照合

## conflicts

- 導入/リリース日はパチビー2007-01-09と北電子担当者回顧2007-01-07が併存。月単位では一致するためreleaseDate本体は2007-01とし、日付原値を保持。
- 機械割はパチマガスロマガのシミュレート値96.91〜106.55%と、後年資料のメーカー発表値95.9〜105.2%等で定義差がある。平均化しない。
