# パチスロ甲鉄城のカバネリ

machineName: パチスロ甲鉄城のカバネリ
formalModelName: S パチスロ甲鉄城のカバネリ ZR
manufacturer: サミー
inspectionCode: 2S0243
releaseDate: 2022-07-04
generation: 6.5号機
systemType: AT / CZ / 疑似ボーナス / ST
recordNo: 1503
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

- 設定1: 97.8%
- 設定2: 98.8%
- 設定3: 100.7%
- 設定4: 105.9%
- 設定5: 108.4%
- 設定6: 110.0%

信頼度: HIGH（複数解析一致）

## initialHitBySetting

### ボーナス初当り合成
- 設定1: 1/237.0
- 設定2: 1/230.7
- 設定3: 1/214.0
- 設定4: 1/186.5
- 設定5: 1/171.3
- 設定6: 1/151.3

### ST初当り
- 設定1: 1/407.9
- 設定2: 1/393.2
- 設定3: 1/372.4
- 設定4: 1/327.2
- 設定5: 1/307.3
- 設定6: 1/290.6

信頼度: HIGH（パチマガスロマガ / 必勝本 / 一撃で一致）

## baseGamesPer50

- 設定1: 約33G / 50枚

信頼度: HIGH

## netIncrease

- メインの高純増ボーナス / ST中: 約6.0枚/G
- 駿城ボーナス: 約2.8枚/G
- 無名回想: 約0.3枚/G

## basicPayout

- 駿城ボーナス: 20G
- エピソードボーナス（通常時）: 150枚払出 / 平均獲得約110枚とする解析あり
- カバネリボーナス: 200〜1000枚払出
- エピソードボーナス（ST中）: 300枚払出
- カバネリボーナスのカバネリアタック平均期待枚数: 約261.6枚

## modeSpecificMinimumData

- 6.5号機 / 有利区間最大4000G / 差枚数管理。
- 通常時は無名CZ / 生駒CZ / 美馬CZからボーナスを目指す。
- 通常時ボーナスはエピソードボーナスと駿城ボーナス。エピソードボーナスはST突入濃厚、駿城ボーナスはST期待度約20%。
- メインST「KABANERI OF THE IRON FORTRESS」は25G+α、継続期待度約75〜76%。
- 美馬STは30G+α、継続期待度約80%。裏美馬STは約95%。
- 通常ゲーム数天井はST間1000G+α。到達でエピソードボーナス＝ST確定。
- 駿城ボーナス4回スルー後、5回目のボーナスはエピソードボーナスとなるスルー天井あり。
- 駿城ボーナスでST非突入の場合、通常ゲーム数天井は引き継ぐ。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior

- 設定変更時は **有利区間RESET / 天井RESET / 内部モードRESET / 内部状態RESET**。
- 通常ゲーム数は液晶表示0Gから開始するが、内部的には **ランダム加算抽選**を行う。
- ゲーム数天井は通常1000G+αから **650G+αへ短縮**。
- 黒煙りもRESET。
- 設定変更後は平均約6G継続する特殊状態へ移行する。

### carryOverBehavior

- 据え置き時は **有利区間 / 天井 / 通常ゲーム数 / 内部状態 / 黒煙りをCARRY_OVER**。
- なな徹の設定変更/据え置き比較表で直接確認。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ONでは **有利区間 / 天井 / 内部モード / 内部状態 / 通常ゲーム数をCARRY_OVER**。
- パチマガスロマガの設定変更/電源OFF・ON比較表で直接確認。

### gameCounterReset

- 設定変更: 外見上0G開始、内部ゲーム数はRESET後にランダム加算。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 前日ゲーム数＋当日ゲーム数から据え置きを推定できる場合があるが、設定変更時の内部G数ランダム加算により単純判別は不可。

### ceilingAfterReset

- 通常時: ST間1000G+αでエピソードボーナス。
- 設定変更時: **650G+αへ短縮**。
- 同じ650G+α短縮はST駆け抜け後・美馬ST後にも発生するため、650G到達だけを設定変更確定材料にはしない。

### modeAfterReset

- 設定変更: 内部モードRESET。
- 据え置き / 純電源OFF→ON: 内部モードCARRY_OVER。
- 設定変更専用の通常モード振り分け数値は今回の公開資料では固定しない。

### stateAfterReset

- 設定変更: 内部状態RESET。平均約6Gの特殊状態へ移行。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 特殊状態中にオールスター目が成立した場合はST直撃。

### advantageousSectionReset

- 設定変更: 有利区間RESET。
- 据え置き / 純電源OFF→ON: 有利区間CARRY_OVER。
- ST開始時の一部でも有利区間RESET。
- 本機は有利区間ランプ非搭載のため、朝一ランプによる変更判別は不可。

### resetBenefits

- ゲーム数天井が1000G+α → **650G+α**へ短縮。
- 内部通常ゲーム数のランダム加算。
- 設定変更直後は平均約6Gの特殊状態へ移行し、特殊状態中のオールスター目でST直撃。
- 設定変更後の初回ST突入時、**0.3%**で「それじゃあ1000枚目標でフラグ」が選択され、ST中初回ボーナス1000枚が選択される。

### resetPenalties

- 設定変更時の独立した固定ペナルティ: **NONE_CONFIRMED**。
- 前日からの有利区間・天井進行・内部状態・黒煙りを失う点は通常のリセット挙動として扱う。

### resetDetection

- リールガックンは **設定変更 / 据え置きとも発生しない**。本機ではガックン判別不可。
- 有利区間ランプ非搭載のためランプ判別不可。
- 前日最終Gを正確に把握している場合は規定G当選位置から据え置きを推測できることがあるが、設定変更時の内部G数ランダム加算があるため確定判別には使えない。

### numericResetData

- 設定変更時ゲーム数天井: **650G+α**。
- 通常時ゲーム数天井: **1000G+α**。
- 設定変更後の特殊状態: **平均約6G**。
- 設定変更後初回ST時「それじゃあ1000枚目標でフラグ」当選率: **0.3%**。
- 設定変更時の内部通常ゲーム数: **ランダム加算（加算振り分け数値は公開固定せず）**。

### publicMorningNumbers

- 朝一設定変更時の主要公開数値は **650G+α天井 / 特殊状態平均約6G / 初回ST時1000枚目標フラグ0.3%**。
- 内部ゲーム数加算は存在が公開されているが、今回確認できた高信頼資料では加算G振り分け表を固定しない。

## resetBehavior QAメモ

- なな徹は設定変更/据え置き比較として、有利区間・G数・天井・内部状態・黒煙りをRESET/CARRY_OVERと明記し、ガックンは双方なしとする。
- パチマガスロマガは設定変更/電源OFF・ON比較として、有利区間・天井・内部モード・内部状態・通常G数をRESET/CARRY_OVERと明記。
- 必勝本も1000G+α通常天井、設定変更後650G+α、内部G数ランダム加算、平均約6Gの特殊状態、ガックン判別不可を独立確認。
- 以上から設定変更・据え置き・純電断の主要契約は複数系統で固定可能。

## conflicts

- 主要な設定別ボーナス初当り / ST初当り / 機械割は複数解析で一致し、実質的CONFLICTなし。
- ST継続率は資料により約75% / 約76%表記があるため、丸め差として75〜76%で保持。
- エピソードボーナス通常時は「150枚払出」と「平均約110枚獲得」の表現差があるため、払出と純獲得を混同せず併記。

## missingFields

- 設定変更時の内部通常ゲーム数ランダム加算の完全な振り分け表: UNVERIFIED / PUBLIC_DISTRIBUTION_NOT_FIXED
- 設定変更専用の通常モード振り分け表: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-12

1. HAZUSE — パチスロ甲鉄城のカバネリ
   - https://hazuse.com/machine/pachislot/2S0243/
   - 型式 `S パチスロ甲鉄城のカバネリ ZR`、検定番号2S0243、2022-07-04、機械割97.8〜110.0%
   - reliability: ANALYSIS_HIGH / MODEL_DB
2. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/198/kh02.php
   - 設定別ボーナス初当り/ST初当り/機械割
   - reliability: ANALYSIS_HIGH
3. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3906/1/89494
   - 6.5号機、約33G/50枚、約6.0枚/G、設定別性能
   - reliability: ANALYSIS_HIGH
4. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/9640
   - 6.5号機、ボーナス仕様、ST、1000G+α、設定変更650G+α
   - reliability: INDUSTRY_DB
5. なな徹 — 朝一（リセット）設定変更時の挙動や恩恵
   - https://nana-press.com/kaiseki/machine/384/10249/
   - 設定変更/据え置き比較、650G+α、内部G数加算、特殊状態平均6G、初回ST0.3%、ガックン、有利区間ランプ
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 朝イチ・有利区間ランプ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/198/kr01-2.php
   - 設定変更/電源OFF・ONの有利区間・天井・内部モード・内部状態・通常G数比較
   - reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本 — 天井・設定変更時の恩恵
   - https://p.hisshobon.jp/machine/3906/1/90968
   - 通常1000G+α、リセット650G+α、内部G数ランダム加算、特殊状態平均6G、ガックン不可
   - reliability: ANALYSIS_HIGH
8. 一撃 — 天井とやめどき
   - https://1geki.jp/slot/s_kabaneri/3/
   - 1000G+α、650G+α短縮条件
   - reliability: ANALYSIS_HIGH
