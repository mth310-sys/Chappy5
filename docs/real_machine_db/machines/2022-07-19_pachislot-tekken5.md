# パチスロ鉄拳5

recordNo: 1508
machineName: パチスロ鉄拳5
manufacturer: 山佐 / 山佐ネクスト
formalModel: Sパチスロ鉄拳5DC
inspectionCode: 2S0091
releaseDate: 2022-07-19
generation: 6.5号機
systemType: A+AT / リアルボーナス+AT

## payoutRateBySetting

- 設定1: 97.6%
- 設定2: 98.6%
- 設定3: 100.3%
- 設定4: 103.7%
- 設定5: 107.2%
- 設定6: 111.0%

HAZUSE・1geki・複数解析で一致。

信頼度: HIGH

## initialHitBySetting

### ボーナス合算
- 設定1: 1/273.1
- 設定2: 1/266.4
- 設定3: 1/260.1
- 設定4: 1/249.2
- 設定5: 1/239.2
- 設定6: 1/229.1

### AT「鉄拳RUSH」初当り
- 設定1: 1/475.2
- 設定2: 1/468.2
- 設定3: 1/454.3
- 設定4: 1/427.0
- 設定5: 1/401.2
- 設定6: 1/369.2

### ボーナス+AT合算
- 設定1: 約1/173
- 設定2: 約1/169
- 設定3: 約1/165
- 設定4: 約1/157
- 設定5: 約1/149
- 設定6: 約1/141

信頼度: HIGH

## baseGamesPer50

- 約34.0G/50枚

信頼度: HIGH

## netIncrease

- AT「鉄拳RUSH」: 約+1.3枚/G
- 初期50G+α、ゲーム数上乗せ型

信頼度: HIGH

## basicPayout

- 赤7BIG: 192枚
- 青7/白7BIG: 約115枚
- REG: 48枚

信頼度: HIGH

## modeSpecificMinimumData

- A+ATタイプ。リアルボーナスとATで出玉を増やす。
- 通常時は通常/高確の内部状態が存在し、AT/CZ当選率に影響。
- CZ「鉄拳バトル」、AT「鉄拳RUSH」、引き戻し「鉄拳チャンス」を搭載。
- 通常時天井: 有利区間移行後750G+αでAT当選。ボーナス後は前兆分によりデータカウンタ上780G+α付近となる場合がある。
- 有利区間リセット契機: 設定変更時、ボーナス後の前兆終了時、AT後の鉄拳チャンス終了時、完走時。
- 有利区間ランプ非搭載。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_UNVERIFIED_CARRYOVER_DETAILS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior

- 設定変更時は有利区間をRESET。
- 有利区間移行後750G+α天井のカウントも新しい有利区間基準で再スタートするため、天井ゲーム数はRESET扱い。
- 通常/高確や裏段位など内部状態の設定変更直後の詳細振り分けは、比較可能な直接数値を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時の天井ゲーム数・内部状態・裏段位等を「設定変更時」と直接比較した高信頼な機種固有契約を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な6.5号機挙動からの推測補完は行わない。

### powerCycleBehavior

- 純電源OFF→ONのみの場合の天井ゲーム数・通常/高確・裏段位・有利区間状態を機種固有に直接明記した高信頼資料を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更時: RESET。通常天井は有利区間移行後750G+α。
- ボーナス後は前兆終了後に有利区間が切り替わるため、データカウンタ表示とのズレに注意。

### ceilingAfterReset

- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井: 750G+α → AT「鉄拳RUSH」。

### modeAfterReset

- 朝一専用モード、設定変更専用のモード振り分け数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 通常/高確および裏段位の設定変更直後の詳細状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- 二次攻略資料にはリセット後高確スタートを示す記述があるが、今回の複数高信頼資料で数値・確定契約まで照合できず参考扱い。

### advantageousSectionReset

- 設定変更時: RESET（複数解析で直接確認）。
- 有利区間ランプ非搭載のため、目視ランプ判別不可。
- 据え置き/純電断時の個別直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits

- 設定変更専用の短縮天井や確定AT/CZ恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット後高確スタート説は二次攻略資料で確認するが、定量値未確認のため確定恩恵には格上げしない。

### resetPenalties

- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 有利区間ランプ非搭載のためランプによる設定変更判別は不可。
- 本機固有ガックンや初期出目等による確定判別は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更専用の短縮天井・モード選択率・朝一当選率など比較可能な公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

- 検索語: `鉄拳5 / Sパチスロ鉄拳5DC / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 有利区間 / 高確 / 裏段位 / ガックン / 判別`。
- 公式発表系、業界記事、HAZUSE、1geki、必勝本、当時攻略、後年解析を横断。
- 有利区間リセット契機、750G+α天井、ランプ非搭載は複数系統で固定。
- 据え置き/純電断の細部や設定変更直後の内部状態振り分けは、一般論で補完せず未確認を保持。

## sources

取得日: 2026-09-13

1. P-WORLD業界ニュース / 遊技日本 — 山佐ネクスト「パチスロ鉄拳5」発表
   - https://news.p-world.co.jp/articles/20459/nippon
   - 型式Sパチスロ鉄拳5DC、6.5号機A+AT、山佐ネクスト、導入時期
   - reliability: INDUSTRY_HIGH
2. Greenbelt / P-WORLD — 2022-07-19新台スケジュール
   - https://news.p-world.co.jp/articles/21193/greenbelt
   - 2022-07-19導入、同日パチスロ欄は鉄拳5のみ
   - reliability: INDUSTRY_HIGH
3. HAZUSE — パチスロ鉄拳5
   - https://hazuse.com/machine/pachislot/2S0091/
   - 型式Sパチスロ鉄拳5DC、検定番号2S0091、出玉率、ボーナス/AT確率、天井、有利区間リセット契機、ランプ非搭載
   - reliability: ANALYSIS_HIGH
4. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/2S0091/genre/201/
   - 出玉率、ボーナス払い出し
   - reliability: ANALYSIS_HIGH
5. 1geki — パチスロ鉄拳5 機種トップ
   - https://1geki.jp/slot/s_tekken5/
   - 出玉率、ボーナス+AT合算、導入日、A+AT/6.5号機
   - reliability: ANALYSIS_HIGH
6. 1geki — 天井/有利区間
   - https://1geki.jp/slot/s_tekken5/3/
   - 750G+α天井、有利区間リセットタイミング、ランプ非搭載
   - reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本 — 通常時解説
   - https://p.hisshobon.jp/machine/3912/1/89825
   - 750G天井、設定変更/ボーナス後/AT後/完走時の有利区間リセット
   - reliability: ANALYSIS_HIGH
8. パチ7 — スペック
   - https://pachiseven.jp/machines/6553/cutout/2
   - BIG/REG/ボーナス合算/AT確率、導入日
   - reliability: ANALYSIS_HIGH
9. ちょんぼりすた — S鉄拳5
   - https://chonborista.com/slot/yamasa-slot/168430/
   - 34G/50枚、A+AT、ボーナス枚数、AT純増
   - reliability: ANALYSIS_HIGH
10. フリック7 — 2022年朝一リセットガイド
   - https://flick7.net/slot/reset_guide2022.php
   - リセット判別不可、リセット後高確スタートの記述
   - reliability: ANALYSIS_SINGLE

## missingFields

- 据え置き時の天井/内部状態/裏段位の機種固有直接契約
- 純電源OFF→ON時の天井/内部状態/有利区間の機種固有直接契約
- 設定変更直後の通常/高確・裏段位振り分け
- 本機固有ガックン/初期出目判別
- 設定変更専用の比較可能な公開朝一数値

## conflicts

- 重大な性能数値CONFLICTなし。
- 天井表記は「有利区間移行後750G+α」と、ボーナス後の前兆を含むデータカウンタ上「780G+α」が併存するが定義差であり競合ではない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_UNVERIFIED_CARRYOVER_DETAILS
confidence: HIGH_CORE / HIGH_RESET_CORE_WITH_EXPLICIT_UNVERIFIED_DETAILS
