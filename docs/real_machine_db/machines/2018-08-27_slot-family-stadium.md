# No.1225 SLOTファミリースタジアム

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: SLOTファミリースタジアム
- manufacturer: メーシー
- releaseDateCanonical: 2018-08-27
- generation: 5号機
- systemType: A+RT / リアルボーナス+RT / 技術介入
- formalModelName: `SLOTファミリースタジアム/DN`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ユニバーサルエンターテインメント公式は2018年8月発売と掲載。
- K-Navi、ちょんぼりすた、すろぱちくえすと、一撃は2018-08-27導入で一致。
- 日刊スポーツ当時導入カレンダーも2018-08-27のパチスロ導入機として本機を掲載。
- confidence: `OFFICIAL_INDUSTRY_AND_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- ユニバーサルエンターテインメント公式はメーカーをメーシー、分類を5号機、タイプをボーナス+RTと掲載。
- Amusement Japanの2018-07-25業界記事も「メーシー社製パチスロ」と確認。
- 中古実機DBでは型式名 `SLOTファミリースタジアム/DN` を確認。型式は単一系統のため `ANALYSIS_SINGLE/SECONDARY_DB` 相当として保持。
- 検定番号は機種名/型式名/メーシー/公安委員会/検定/7S/8Sを組み替え、現存DB・公報系検索まで再探索したが今回高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

## performanceCore

### payoutRateBySetting
- setting1: 97.5%
- setting2: 99.3%
- setting5: 103.2%
- setting6: 107.1%

- パチマガスロマガ、ちょんぼりすた、すろぱちくえすと、一撃で一致。

### initialHitBySetting
赤7BIG:
- setting1: 1/682.7
- setting2: 1/675.6
- setting5: 1/655.4
- setting6: 1/636.3

青7BIG:
- setting1: 1/682.7
- setting2: 1/675.6
- setting5: 1/655.4
- setting6: 1/636.3

BIG合成:
- setting1: 1/341.3
- setting2: 1/337.8
- setting5: 1/327.7
- setting6: 1/318.1

REG:
- setting1: 1/481.9
- setting2: 1/431.2
- setting5: 1/394.8
- setting6: 1/348.6

ボーナス合算:
- setting1: 1/199.8
- setting2: 1/189.4
- setting5: 1/179.1
- setting6: 1/166.3

### baseGamesPer50
- 約35.5～37.9G/50枚（設定差を含む掲載レンジ）。
- ちょんぼりすた、すろぱちくえすとで一致。

### netIncrease
- RT純増: `現状維持程度` とする当時解析あり。
- 1Gあたりの比較可能な精密純増値は今回固定できず、推測換算しない。

### basicPayout
- BIG BONUS: 最大304枚。
- REG BONUS: 最大108枚。
- BIG後RT「延長戦」: 30G固定。
- REG後RT「延長戦」: チャンスリプレイ成立まで継続。

### ceiling
- 通常ゲーム数天井: `NONE / 非搭載`。

## modeSpecificMinimumData
- ボーナス後はBIG/REGともRTへ突入。
- BIG後は30G固定、REG後はチャンスリプレイ成立までのゲーム数不定RT。
- 通常時のチャンスリプレイ成立後には1G固定のプチRTがある。
- 実機完全再現用の小役別同時当選率、リーチ目・演出法則、設定示唆詳細は収集対象外。

## resetBehavior

### settingChangeBehavior
- ちょんぼりすたは設定変更時に「ボーナス、RTなどの状態をすべてリセット」と掲載。
- 一撃は設定変更時のRT状態を `リセット` と明記。
- 少なくともRT状態RESETは複数解析系統で一致し `ANALYSIS_HIGH_CROSSCHECKED`。
- ボーナス成立状態を含む「すべて」の範囲はちょんぼりすた単独表現のため、RT以外の細部へ一般化しすぎない。

### carryOverBehavior
- 設定据え置きそのものを、純電源OFF→ON条件と独立して明示した本機固有資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電断の引継ぎ情報を据え置き契約へ自動転記しない。

### powerCycleBehavior
- ちょんぼりすたは電源OFF→ON時に状態をすべて引き継ぐと掲載。
- 一撃は電源OFF→ON時にRT状態を `引き継ぐ` と明記。
- ボーナス未告知成立中に閉店した場合、電源復帰時はボーナス告知状態へ移行するとの当時解析注記あり。
- RT状態CARRYOVERは `ANALYSIS_HIGH_CROSSCHECKED`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- BIG後30G RT残りG数は設定変更時RT RESET / 純電断時RT CARRYOVERという公開契約に従う。
- REG後RTはチャンスリプレイ成立までのため通常の天井Gカウンタではない。

### ceilingAfterReset
- 通常天井/リセット短縮天井: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- AT/ARTの通常モードや朝一専用モードは本機の基本構造上確認されず、設定変更専用モード振り分けも `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- RT状態は設定変更時RESET、純電源OFF→ON時CARRYOVERを複数資料で確認。
- RT以外の内部状態について朝一専用の再抽選状態や高確状態は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機の公開ゲーム性はリアルボーナス+RTで、AT/ART/CZの有利区間を用いた出玉管理・朝一有利区間挙動は確認できず `NOT_APPLICABLE_TO_PUBLIC_GAMEPLAY_NO_ADVANTAGEOUS_SECTION_BEHAVIOR_CONFIRMED`。
- 5.9号機という年代だけを根拠に本機固有の有利区間契約を推測しない。

### resetBenefits
- ちょんぼりすたは「ノーマルタイプなので朝イチの特典は存在しない」と明記。
- 通常天井短縮、設定変更専用初当たり/CZ優遇、朝一専用高確・専用モード等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの主要な不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 機種名/略称/型式/メーカーと「ガックン」「リールガックン」「朝一」「変更判別」「据え置き」「BGM」を組み替えて再探索したが、本機固有の設定変更/据え置き確定・濃厚条件やガックン発生率は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- BIG中ミニゲームやBGMの通常設定示唆はresetDetectionとは分離する。

### numericResetData
- 設定変更時モード振り分け、朝一特定G以内当選率、リセット恩恵率、ガックン率、短縮天井G数等: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- 主要性能コアおよびRTリセット契約について採用判断を左右す直接数値CONFLICTは今回確認なし。
- 型式名は現状単一二次DBのみで、競合ではなく信頼度不足として扱う。

## missingFields
- 検定番号。
- 型式名 `SLOTファミリースタジアム/DN` の公報/一次資料照合。
- 据え置き条件を純電断と独立して示す本機固有契約。
- 本機固有の朝一変更判別条件・公開reset数値。
- RT純増の精密な枚/G値。

## sources
取得日: 2026-09-10

1. ユニバーサルエンターテインメント公式 — SLOTファミリースタジアム
   - https://www.universal-777.com/product/slot/famista/
   - メーカー=メーシー、分類=5号機、タイプ=ボーナス+RT、2018年8月発売。
   - reliability: `OFFICIAL`
2. ユニバーサルエンターテインメント公式 — 2018年製品一覧
   - https://www.universal-777.com/product/slot/2018/
   - 2018年8月発売を照合。
   - reliability: `OFFICIAL`
3. Amusement Japan — 2018-07-25新機種記者発表会
   - https://amusement-japan.co.jp/article/detail/10000738/
   - メーシー社製、ファミスロ第2弾。
   - reliability: `INDUSTRY`
4. 日刊スポーツ — 2018年8月導入カレンダー
   - https://www.nikkansports.com/amusement/pachislot/news/201808170000386.html
   - 2018-08-27導入。同日のパチスロ掲載は本機のみ。
   - reliability: `INDUSTRY_CALENDAR`
5. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/8735
   - メーカー、RT/技術介入/リアルボーナス、BIG最大304枚、REG最大108枚、RT仕様。
   - reliability: `INDUSTRY_DB`
6. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/49/h-1.php
   - 4段階設定、設定別赤7BIG/青7BIG/BIG合成/REG/合算/PAYOUT。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
7. パチマガスロマガ — ゲーム性
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/49/l.php
   - BIG/REG最大枚数、BIG後30G RT、REG後チャンスリプレイまで、通常時1GプチRT。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
8. ちょんぼりすた — 解析
   - https://chonborista.com/slot/universal-slot/62557/
   - 導入2018-08-27、設定別確率/機械割、約35.5～37.9G/50枚、天井非搭載、朝一恩恵なし、設定変更時状態RESET、電源OFF→ON時CARRYOVER、未告知ボーナス復帰注記。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
9. 一撃 — 基本スペック/リセット
   - https://1geki.jp/slot/s_famista/
   - https://1geki.jp/slot/s_famista/3/
   - 導入2018-08-27、設定別合算/PAY、設定変更時RT RESET、電源OFF→ON時RT CARRYOVER、天井非搭載。
   - reliability: `ANALYSIS_HIGH_CROSSCHECK`
10. K-Navi — 機種DB
   - https://p-kn.com/slot/3072/
   - 導入2018-08-27、BIG最大304枚、REG最大108枚、ボーナス後RT。
   - reliability: `ANALYSIS_PERIOD_DB`
11. すろぱちくえすと — 2018年解析
   - https://www.slopachi-quest.com/article/family-stadium/
   - 導入2018-08-27、設定別スペック、35.5～37.9G/50枚、RT現状維持程度、天井非搭載。
   - reliability: `ANALYSIS_PERIOD_SOURCE`
12. 中一商事 — 中古実機DB
   - https://www.nakaiti.com/html/sMacy101.html
   - 型式名 `SLOTファミリースタジアム/DN`、5号機RT。
   - reliability: `SECONDARY_MACHINE_DB`

## researchNotes
- resetBehavior再探索語: `SLOTファミリースタジアム / ファミスタ / SLOTファミリースタジアム/DN / メーシー` × `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT状態 / ボーナス成立 / ガックン / リールガックン / 変更判別 / BGM / 有利区間`。
- identification再探索語: 型式名表記揺れ + `検定番号 / 公安委員会 / 公報 / 7S / 8S`。
- 検定番号・据え置き独立契約・ガックン/変更判別数値は十分な再探索後も高信頼固定できなかったためUNVERIFIED/NONE_CONFIRMEDとした。
