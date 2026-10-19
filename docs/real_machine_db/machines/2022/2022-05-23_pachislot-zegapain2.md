# パチスロ ゼーガペイン2

machineName: パチスロ ゼーガペイン2
formalModelName: Sパチスロゼーガペイン2ZZ
manufacturer: 山佐ネクスト（製造元: 山佐）
inspectionCode: 1S1425
releaseDate: 2022-05-23
generation: 6.2号機
systemType: A+AT / リアルボーナス + CZ + ゲーム数上乗せAT
recordNo: 1499
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

- 設定1: 97.9%
- 設定2: 98.7%
- 設定3: 100.2%
- 設定4: 104.4%
- 設定5: 106.6%
- 設定6: 110.2%

信頼度: HIGH（HAZUSE、複数解析、当時業界資料で照合）

## initialHitBySetting

### AT「ゼーガラッシュ」初当り
- 設定1: 1/585.7
- 設定2: 1/549.2
- 設定3: 1/487.7
- 設定4: 1/390.1
- 設定5: 1/340.3
- 設定6: 1/282.6

### リアルボーナス
- リザレクションボーナス（同色BIG）: 全設定 1/595.8
- ゼーガボーナス（異色REG）:
  - 設定1: 1/455.1
  - 設定2: 1/448.9
  - 設定3: 1/442.8
  - 設定4: 1/436.9
  - 設定5: 1/431.2
  - 設定6: 1/420.1
- ボーナス合算:
  - 設定1: 1/258.0
  - 設定2: 1/256.0
  - 設定3: 1/254.0
  - 設定4: 1/252.1
  - 設定5: 1/250.1
  - 設定6: 1/246.4

信頼度: HIGH

## baseGamesPer50

- 約38G / 50枚

信頼度: HIGH

## netIncrease

- AT「ゼーガラッシュ」純増: 約1.2枚/G
- AT初期ゲーム数: 100G+α

信頼度: HIGH

## basicPayout

- リザレクションボーナス: 203枚固定
- ゼーガボーナス: 約100枚
- AT「ゼーガラッシュ」: 初期100G+α、約1.2枚/G

## modeSpecificMinimumData

- 通常時はリアルボーナス、規定ゲーム数、レア役等からCZ「キョウ覚醒ゾーン」を経てATを目指すA+AT機。
- CZ「キョウ覚醒ゾーン」は1セット最大15G。AT期待度は約40%以上。
- 天井はボーナス間899G消化後の通常時に成立したボーナスでAT確定のCZレベル2当選。
- 天井ゲーム数カウンタはAT当選、有利区間リセット、設定変更でも引き継がれる特殊仕様。
- 有利区間移行時は高確状態から開始し、15G以上の高確保障がある。
- 通常時は有利区間ランプ非点灯タイプ。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_CONFLICT_NOTES
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior

- 設定変更時は **有利区間RESET**。
- 通常時の内部状態はリセットされ、有利区間移行に伴い **高確15G以上濃厚**。
- 液晶ステージはカミナギステージ。
- 液晶ゲーム数表示は0G。
- ボーナス間899G天井カウンタは **CARRY_OVER** をcanonicalとする。
- AT当選でも天井ゲーム数はリセットされない。

### carryOverBehavior

- 据え置き時は有利区間・内部状態を **CARRY_OVER**。
- ボーナス間天井ゲーム数も **CARRY_OVER**。
- 朝一表示ステージはカミナギステージとなる資料があり、表示ステージ単独では設定変更判別に使えない。

### powerCycleBehavior

- 設定変更なしの電源OFF→ONでは有利区間 **CARRY_OVER**。
- 内部状態 **CARRY_OVER**。
- ボーナス間899G天井ゲーム数 **CARRY_OVER**。
- 液晶ステージはカミナギステージ、液晶ゲーム数表示は0G。

### gameCounterReset

- 設定変更: **CARRY_OVER**（ボーナス間899G天井用の内部カウンタ）。
- 据え置き: **CARRY_OVER**。
- 純電源OFF→ON: **CARRY_OVER**。
- AT当選 / 有利区間リセットでも天井カウンタは引き継ぐ。
- メニュー画面から現在のボーナス間G数を確認できる資料あり。

### ceilingAfterReset

- 設定変更による固定短縮天井は **NONE_CONFIRMED**。
- 通常天井はボーナス間899G消化後、次回ボーナス成立でAT確定CZ。
- 設定変更後も天井カウンタを引き継ぐため、前日ハマリG数の宵越し狙いが成立する。
- 新装時のRAMクリアは通常の設定変更と別条件。RAMクリア直後は内部的に「天井状態」から始まるとする解析があり、初回ボーナスでAT濃厚。ただし通常の設定変更契約には混ぜない。

### modeAfterReset

- 設定変更専用の独立モード振り分けは **NONE_CONFIRMED**。
- 有利区間移行時の規定G数・CZ前兆管理は再抽選されるが、通常時の全モード移行テーブルは実機完全再現用のため本DB対象外。

### stateAfterReset

- 設定変更時: 内部状態RESET後、**高確15G以上濃厚**。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 内部状態CARRY_OVER。
- 通常の高確滞在は平均約18Gとする解析あり。

### advantageousSectionReset

- 設定変更: **RESET**。
- 据え置き: **CARRY_OVER**。
- 純電源OFF→ON: **CARRY_OVER**。
- 通常時は有利区間ランプ非点灯タイプで、有利区間移行/終了を頻繁に繰り返す仕様。

### resetBenefits

- 設定変更後は高確15G以上濃厚。
- 天井ゲーム数を引き継ぐため、前日のボーナス間ハマリが深い場合は朝一の宵越し期待値が残る。
- 固定天井短縮や設定変更専用AT/CZ優遇は **NONE_CONFIRMED**。

### resetPenalties

- 設定変更固有の主要な不利要素は **NONE_CONFIRMED**。

### resetDetection

- 朝一15G間に高確示唆演出が確認できれば設定変更期待度が上がる。ただし前日高確据え置きや小役による自力高確移行でも発生し得るため確定判別ではない。
- 通常時は有利区間ランプ非点灯タイプのため、朝一ランプだけでは設定変更判別 **不可**。
- 設定変更時も電源OFF→ON時もカミナギステージ / 液晶0Gとなるため、表示だけでの判別は困難。
- 本機固有のリールガックンによる確定的変更判別は、表記揺れ・型式名・メーカー名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を組み合わせ再探索したが直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- 設定変更後: 高確 **15G以上濃厚**。
- 通常高確滞在: 平均約18G。
- 天井: ボーナス間 **899G** 消化後、次回ボーナスでAT確定CZ。
- 設定変更時の天井短縮: **なし（天井G数CARRY_OVER）**。

### publicMorningNumbers

- 設定変更後 高確15G以上濃厚。
- ボーナス間899G天井カウンタは設定変更後も引き継ぎ。

## resetBehavior QAメモ

- パチマガスロマガは設定変更 / 電源OFF→ONを直接比較し、設定変更時「有利区間RESET・内部状態は高確確定・天井CARRY_OVER」、純電断時「有利区間/内部状態/天井CARRY_OVER」を掲載。
- HAZUSE、1geki、ちょんぼりすた、スロットセブンも「設定変更・有利区間リセット・AT当選でも天井ゲーム数を引き継ぐ」で一致。
- なな徹の朝一概要表には「設定変更時 天井リセット」とある一方、同一ページ本文では「ボーナス間G数は有利区間がリセットされても引き継がれる」と記載され、他の複数独立資料とも矛盾する。平均化せず `CONFLICT` として保持し、canonicalは複数一致するCARRY_OVERとする。
- RAMクリア時の「天井状態スタート」は通常設定変更と分離して保持。

## sources

取得日: 2026-09-12

1. P-WORLD / 遊技日本 — 「Sパチスロゼーガペイン2ZZ」検定通過
   - https://news.p-world.co.jp/articles/19472/nippon
   - 型式名、山佐ネクスト、検定通過
   - reliability: INDUSTRY
2. P-BOMB — 山佐ネクスト「パチスロ ゼーガペイン2」メディア向け試打会
   - https://p-bomb.co.jp/industry/maker/3685/
   - 6.2号機A+AT、203枚BIG、約100枚REG、AT純増約1.2枚/G、初期100G+α
   - reliability: INDUSTRY
3. HAZUSE — パチスロ ゼーガペイン2
   - https://hazuse.com/machine/pachislot/1S1425/
   - inspectionCode 1S1425、設定別機械割、ボーナス/AT仕様、天井・設定変更挙動
   - reliability: ANALYSIS_HIGH / OLD_DB
4. パチマガスロマガ — 朝イチ・有利区間ランプ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/06/kr01.php
   - 設定変更 / 電源OFF→ON比較、有利区間、内部状態、天井、ステージ
   - reliability: ANALYSIS_HIGH
5. なな徹 — 朝イチ/設定変更時
   - https://nana-press.com/kaiseki/machine/337/10070/
   - 設定変更後高確15G以上、ランプ、朝一挙動。天井概要表と本文に内部CONFLICTあり
   - reliability: ANALYSIS_HIGH / CONFLICT_SOURCE
6. 1geki — 天井・設定変更
   - https://1geki.jp/slot/s_zegapain2/3/
   - 899G天井、設定変更でも天井引継ぎ、高確15G以上、電源OFF→ON表示
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた — Sゼーガペイン2
   - https://chonborista.com/slot/yamasa-slot/164299/
   - 2022-05-23、機械割、AT初当り、ベース、純増、天井、リセット挙動
   - reliability: ANALYSIS_HIGH
8. パチ7 — パチスロ ゼーガペイン2
   - https://pachiseven.jp/machines/6532/cutout/15
   - 2022-05-23、山佐/山佐ネクスト、A+AT、899G天井
   - reliability: ANALYSIS_HIGH
9. イチカツ — 2022年新台導入日カレンダー
   - https://ichikatsu.com/newslot2022/
   - 2022-05-23実導入、設定別ボーナス/AT/機械割、約38G/50枚
   - reliability: ANALYSIS
10. パチスロ立ち回り講座 — 新台導入予定日
   - https://crankyseven.com/newmachine-info.htm
   - 2022-05-23群が「けものフレンズ」「ゼーガペイン2」の2機であることをクロス監査
   - reliability: OLD_DB / CALENDAR
11. 娯楽産業 — 山佐ネクスト 新機種「パチスロ ゼーガペイン2」発表
   - https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%83%8D%E3%82%AF%E3%82%B9%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%BC%E3%83%BC%E3%82%AC%E3%83%9A%E3%82%A4%E3%83%B32%E3%80%8D/
   - 当初「2022年5月上旬ホールデビュー予定」資料として日付競合履歴を保持
   - reliability: INDUSTRY
12. K-Navi — パチスロ ゼーガペイン2
   - https://p-kn.com/slot/3760/
   - 2022-05-09表記の旧予定系資料としてDATE_CONFLICT保持
   - reliability: ANALYSIS / DATE_CONFLICT

## missingFields

- 本機固有のリールガックンによる設定変更判別契約
- RAMクリア以外の特殊店側操作時の内部状態

## conflicts

- **導入日**: 旧予定系資料に2022-05-09 / 「5月上旬」表記が残るが、2022-05-23の実導入を複数実稼働系資料・後続カレンダーで照合したためcanonicalは2022-05-23。旧予定値は `DATE_CONFLICT` として保持。
- **設定変更時の天井**: なな徹の概要表だけ「リセット」と記載する一方、同一ページ本文およびパチマガ、HAZUSE、1geki、ちょんぼりすた、スロットセブンは引継ぎで一致。平均化せずCONFLICT保持、canonicalはCARRY_OVER。
- メーカー表記は「山佐」「山佐ネクスト」が混在するため、製造元: 山佐 / 販売・ブランド: 山佐ネクストとして役割分離。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_CONFLICT_NOTES
confidence: HIGH_CORE / HIGH_RESET
