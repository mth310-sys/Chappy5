# パチスロ アクエリオン ALL STARS

machineName: パチスロ アクエリオン ALL STARS
formalModelName: SアクエリオンD R
manufacturer: SANKYO
inspectionCode: 2S0131
releaseDate: 2022-07-04
generation: 6.5号機
systemType: AT / CZ / ゲーム数・セット数上乗せ
recordNo: 1506
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

- 設定L: 81.6%
- 設定1: 96.8%
- 設定2: 98.7%
- 設定4: 103.0%
- 設定5: 105.4%
- 設定6: 108.3%

※設定3は搭載しない設定構成。設定Lは下パネル高速点滅で識別可能。

信頼度: HIGH（パチ＆スロ必勝本 / K-Navi / HAZUSE系で一致）

## initialHitBySetting

### CZ初当り
- 設定1: 1/220
- 設定2: 1/206
- 設定4: 1/176
- 設定5: 1/167
- 設定6: 1/159

### AT「アクエリオンRUSH」初当り
- 設定1: 1/393
- 設定2: 1/374
- 設定4: 1/331
- 設定5: 1/309
- 設定6: 1/289

信頼度: HIGH（SANKYO公式オンライン博物館 / パチ＆スロ必勝本 / K-Navi / HAZUSE系で一致）

## baseGamesPer50

- 約33.9G / 50枚（解析掲載値。別資料では約34G表記）

信頼度: ANALYSIS_HIGH

## netIncrease

- AT「アクエリオンRUSH」: 約2.5枚/G

信頼度: OFFICIAL / HIGH（SANKYO公式オンライン博物館および複数解析で一致）

## basicPayout

- AT「アクエリオンRUSH」: ゲーム数上乗せ+セット数上乗せ型。
- AT初回セット開始時のエクスタシーチャンス: 初期70G以上。
- 2セット目以降: 初期30G以上。
- エクスタシーチャンスでは最大300G。
- AT中の上乗せ特化ゾーンでは1契機最大1010G上乗せが公開されている。

## modeSpecificMinimumData

- SANKYO初の6.5号機。有利区間最大4000G、差枚数+2400枚仕様。
- 通常時はレア小役 / 規定ゲーム数でCZ・ATを抽選。
- CZ「EVOLチャンス」は10〜30G、成功期待度約45%。上位CZ「アポロニアスモード」も存在。
- 通常ゲーム数天井: 液晶1000G+αでAT。LOVEチャージによる加算ゲーム数も天井カウントに含むため、実消化G数は短くなる場合がある。
- CZ間天井: 700GでCZ。
- CZスルー回数天井: 最大4スルー後、5回目CZはAT当選濃厚。
- ゲーム数テーブルはA〜E・天国の6種類。設定変更時およびAT終了時に抽選。
- 全設定・全状況を加味したテーブル選択率として A 56.0% / B 21.2% / C 11.6% / D 7.1% / E 3.1% / 天国1.0% が公開されているが、設定変更専用振り分けではないため reset専用数値には転用しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_MINOR_UNVERIFIED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior

- 有利区間: RESET。
- 通常ゲーム数天井 / CZ間天井: RESET。
- 内部モード・状態: RESET。
- 設定変更後は高確状態から開始するとHAZUSEが掲載。
- ゲーム数テーブルおよびCZスルー回数天井を再抽選。
- 朝一ステージは昼ステージ。
- 1G目にレア小役成立時はCZ / AT直撃のチャンスとなる。

### carryOverBehavior

- 据え置き時は有利区間・天井・内部状態をCARRY_OVER。
- ゲーム数テーブル等の内部モードも設定変更されない限り引継ぎとして扱う。
- 朝一ステージは昼ステージへ統一されるため、ステージ単独では変更判別不可。
- 朝一液晶上部ゲーム数は設定変更 / 据え置きにかかわらずシャッターで隠される。

### powerCycleBehavior

- 設定変更を伴わない純電源OFF→ONでは、有利区間・天井・内部モード・内部状態を **CARRY_OVER**。
- HAZUSEの設定変更/電源ON・OFF比較表で直接確認。
- ステージは昼ステージ。

### gameCounterReset

- 設定変更: 液晶ゲーム数 / 天井をRESET。
- 据え置き: 天井進行をCARRY_OVER。
- 純電源OFF→ON: 天井進行をCARRY_OVER。
- 通常ゲーム数天井は液晶1000G+αでAT、CZ間700GでCZ。
- CZスルー回数天井は最大4スルー後の5回目CZでAT当選濃厚。設定変更時 / AT終了時に0〜4回の規定回数を抽選する。

### ceilingAfterReset

- 設定変更専用の固定ゲーム数天井短縮値は確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更後も通常ゲーム数天井の最大値は液晶1000G+α。
- ただしLOVEチャージによるゲーム数加算があるため、実消化G数と液晶天井カウントは一致しない場合がある。
- CZスルー回数天井は設定変更時に再抽選されるが、設定変更専用の0〜4回振り分け数値は公開固定できず `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset

- 設定変更時にゲーム数テーブルを再抽選。
- 高設定ほど上位テーブルが選択されやすいと解析されている。
- 設定変更専用の設定別テーブル全振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- A〜E・天国のトータル選択率 56.0 / 21.2 / 11.6 / 7.1 / 3.1 / 1.0% は設定変更時とAT終了時等を含む集計値のため、設定変更専用値とは分離保持。

### stateAfterReset

- 設定変更後は **高確スタート**。
- 据え置き / 純電源OFF→ONでは内部状態CARRY_OVER。
- 高確スタートの内部振り分け率・高確保証G数は、検索語と資料系統を変えて再探索しても公開固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- 設定変更: 有利区間RESET。
- 据え置き / 純電源OFF→ON: 有利区間CARRY_OVER。
- 有利区間リセット契機は設定変更、4000G消化、差枚+2400枚、AT終了時の一部。
- 本機は有利区間ランプ非搭載のため、ランプによる設定変更判別は不可。

### resetBenefits

- 設定変更後は高確スタート。
- 設定変更後 / AT終了後の1G目にレア小役を引いた場合はCZまたはAT直撃のチャンス。
- ゲーム数テーブル / CZスルー回数天井を再抽選する。
- 固定ゲーム数天井の短縮はNONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties

- 設定変更固有の主要な公開不利要素: NONE_CONFIRMED_AFTER_RESEARCH。
- 据え置き時に有利区間継続で上位テーブル選択が優遇されるケースがあるため、設定変更によってその継続状態を失う可能性はあるが、設定変更固有の定量的ペナルティとしては扱わない。

### resetDetection

- 有利区間ランプ: 非搭載のため判別不可。
- 朝一ステージ: 設定変更 / 据え置き / 純電断後とも昼ステージとなり単独判別不可。
- 朝一液晶上部のゲーム数は設定変更 / 据え置きともシャッターで隠される。
- レア小役または規定G数によるCZ前兆（ガセ含む）後にゲーム数表示が復帰する。表示されたG数とデータカウンターが一致なら設定変更濃厚、不一致なら据え置き濃厚（LOVEチャージ加算分は除外して判断）。
- 朝一、レア小役なしで前兆が発生した場合は据え置き濃厚材料。
- 判別には50〜100G程度必要となる場合があるとHAZUSEが整理。
- 本機固有のリールガックン条件 / 発生率は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更専用のテーブル振り分け率: UNVERIFIED_AFTER_RESEARCH。
- 設定変更後高確スタート率: 高確スタート自体は確認できるが、内部振り分け率はUNVERIFIED_AFTER_RESEARCH。
- 設定変更専用の固定天井短縮値: NONE_CONFIRMED_AFTER_RESEARCH。
- 朝一特定G以内AT/CZ当選率: NONE_CONFIRMED_AFTER_RESEARCH。
- 1G目レア小役時のCZ/AT当選率: チャンスであることは確認できるが、公開率はUNVERIFIED_AFTER_RESEARCH。

### publicMorningNumbers

- 設定変更時・AT終了時を含むトータルのゲーム数テーブル選択率: A 56.0% / B 21.2% / C 11.6% / D 7.1% / E 3.1% / 天国1.0%。**設定変更専用値ではない。**
- 設定変更専用の朝一数値として直接固定できたものは今回なし。

## resetBehavior QAメモ

- HAZUSEの設定変更/電源ON・OFF比較表で、有利区間・天井・内部モード/状態のRESET/CARRY_OVERを直接確認。
- NanaPressでも設定変更時RESET / 据え置きCARRY_OVER、朝一昼ステージ、有利区間ランプ非搭載を照合。
- パチ＆スロ必勝本で設定変更時にモード抽選、高設定ほど上位モード優遇、有利区間リセット契機を照合。
- HAZUSE / NanaPress双方で、朝一ゲーム数を一旦隠し、後に表示されたゲーム数とデータカウンターの差を設定変更/据え置き判別材料にできる点を確認。
- `アクエリオン ALL STARS / オールスターズ / SアクエリオンD R / 2S0131 / 2022 / SANKYO` を検索キーとして、2020年パチンコ版や他シリーズ機を分離した。
- 設定変更専用のゲーム数テーブル振り分け、高確内部率、1G目レア小役時CZ/AT当選率は、公式・業界・当時解析・後年整理の複数系統を再探索しても固定できず、推測値を入れていない。

## conflicts

- AT純増:
  - SANKYO公式 / HAZUSE / パチ＆スロ必勝本 / 多数解析: 約2.5枚/G。
  - イチカツの機種概要表: 約2.8枚/G。
  - 一次資料と複数一致を優先し canonical は約2.5枚/G。2.8枚/Gは `SECONDARY_CONFLICT` として保持。
- ベース:
  - 約33.9G/50枚の解析値と、約34G/50枚の丸め表記あり。実質同値の丸め差として扱う。

## missingFields

- 設定変更専用の設定別ゲーム数テーブル全振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の高確内部振り分け率 / 保証G数: UNVERIFIED_AFTER_RESEARCH
- 1G目レア小役時のCZ / AT当選率: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内AT/CZ当選率: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-13

1. SANKYOオンライン博物館 — パチスロ アクエリオン ALL STARS
   - https://www.sankyo-fever.jp/collection/931/
   - 導入年月2022.07、型式SアクエリオンD R、設定別CZ/AT、SANKYO初6.5号機、純増約2.5枚/G、最大1010G上乗せ
   - reliability: OFFICIAL
2. グリーンべると — 2022-05-16検定通過
   - https://web-greenbelt.jp/post-59633/
   - SアクエリオンD Rの検定通過を確認
   - reliability: INDUSTRY
3. HAZUSE — パチスロ アクエリオン ALL STARS / 2S0131
   - https://hazuse.com/machine/pachislot/2S0131/
   - 型式、検定番号、導入日、純増、1000G天井、CZ間700G、CZスルー天井、設定変更/電源ON・OFF比較、朝一判別、有利区間ランプ非搭載
   - reliability: ANALYSIS_HIGH
4. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3901/1/88600
   - 設定L含む機械割、設定別CZ/AT、導入日、純増
   - reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本 — 有利区間について
   - https://p.hisshobon.jp/machine/3901/1/89667
   - 有利区間リセット契機、ランプ非搭載、AT終了時の有利区間継続抽選と上位テーブル優遇
   - reliability: ANALYSIS_HIGH
6. パチ＆スロ必勝本 — 通常時解説
   - https://p.hisshobon.jp/machine/3901/1/89608
   - ゲーム数モードA〜E/天国、設定変更時/AT終了時のモード抽選、1000G/CZ700G/CZスルー天井
   - reliability: ANALYSIS_HIGH
7. NanaPress — 朝一・有利区間挙動
   - https://nana-press.com/kaiseki/machine/383/10362/
   - 設定変更RESET/据え置きCARRY_OVER、昼ステージ、朝一ゲーム数表示による判別、有利区間ランプなし
   - reliability: ANALYSIS_HIGH
8. NanaPress — ゲーム数テーブル
   - https://nana-press.com/kaiseki/machine/383/10380/
   - A〜E/天国、トータル選択率56.0/21.2/11.6/7.1/3.1/1.0%、設定変更時/AT終了時抽選
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ — エクスタシーチャンス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/56/at02-2.php
   - 初回70G以上、2セット目以降30G以上、最大300G
   - reliability: ANALYSIS_HIGH
10. K-Navi — 基本スペック
   - https://p-kn.com/slot/3792/
   - 導入日、設定別CZ/AT
   - reliability: ANALYSIS_HIGH
11. イチカツ — 天井/設定変更
   - https://ichikatsu.com/aquarionallstars/
   - 天井リセット/電源ON・OFF引継ぎ、朝一ゲーム数判別。純増2.8枚/G表記は他ソースと競合
   - reliability: ANALYSIS_SINGLE
12. スロットセブン — 朝一解析
   - https://slot-seven.com/aquarlon-tenzyou/
   - 設定変更時天井/内部状態RESET、電源OFF→ON引継ぎ、朝一高確、1G目レア小役優遇
   - reliability: ANALYSIS_SINGLE
