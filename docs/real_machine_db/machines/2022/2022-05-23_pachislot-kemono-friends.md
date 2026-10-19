# ぱちすろ けものフレンズ

machineName: ぱちすろ けものフレンズ
formalModelName: S けものフレンズ FS
manufacturer: ロデオ（販売・ブランド: サミー）
inspectionCode: 1S1609
releaseDate: 2022-05-23
generation: 6.2号機
systemType: AT / 周期・CZ経由 / 高純増
recordNo: 1498
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

- 設定1: 97.7%
- 設定2: 99.1%
- 設定3: 101.2%
- 設定4: 103.8%
- 設定5: 106.1%
- 設定6: 107.7%

信頼度: HIGH（複数解析・型式DB照合）

## initialHitBySetting

### AT初当り
- 設定1: 1/293.5
- 設定2: 1/280.8
- 設定3: 1/271.9
- 設定4: 1/256.2
- 設定5: 1/243.2
- 設定6: 1/235.4

信頼度: HIGH

## baseGamesPer50

- 約32.3G / 50枚

信頼度: HIGH

## netIncrease

- AT純増: 約9.5枚/G
- ATは1セット10G+α、1セットあたり約100枚を軸に継続抽選。
- 上位AT「野生解放」は大量獲得契機だが、物差しDBでは詳細内部抽選までは収集対象外とする。

信頼度: HIGH

## basicPayout

- メインAT「けものフレンズラッシュ」: 1セット10G+α、約100枚/セットを基本単位とする高純増AT。
- 最大6セット継続を基本構造とする。

## modeSpecificMinimumData

- 通常時は周期進行からCZ「サーバルちゃんす」等を経由してATを目指す。
- 通常のゲーム数天井: AT間999G超の周期終了後にAT当選。
- 周期天井: 最大8周期。内部モードにより2 / 4 / 6 / 8周期が選択される。
- モードA: 最大8周期。
- モードB: 6・8周期が中心。
- モードC: 最大4周期。
- モードD: 最大2周期。
- モードE: 2周期 / 4周期が1:1。
- 有利区間移行を伴う6.2号機AT機。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_TABLES
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior

- 設定変更時は **有利区間RESET**。
- AT間ゲーム数 / 周期天井は **RESET**。
- 内部モード・内部状態は **RESET**。
- 朝一は「ナイトサファリ」ステージから開始する。
- 設定変更後専用の優遇があり、1周期目のAT期待度は約50%。
- 2周期または4周期が天井となる割合は合計95%以上。2周期:4周期は1:1。

### carryOverBehavior

- 据え置き時は有利区間 **CARRY_OVER**。
- AT間ゲーム数 / 周期進行 **CARRY_OVER**。
- 内部モード・内部状態 **CARRY_OVER**。
- 朝一ステージは公開解析上「調査中」を含むため、ステージだけで据え置きを断定しない。

### powerCycleBehavior

- 設定変更なしの電源OFF→ONでは、有利区間 **CARRY_OVER**。
- 天井ゲーム数 / 周期進行 **CARRY_OVER**。
- 内部モード **CARRY_OVER**。
- 純電断時の朝一ステージ表示は資料上未固定のため **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: AT間ゲーム数・周期進行をRESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常ゲーム数天井はAT間999G超の周期終了後。

### ceilingAfterReset

- 設定変更後は通常の最大8周期より大幅に優遇され、**2周期または4周期天井が合計95%以上**。
- 2周期 / 4周期の選択比率は **1:1**。
- 1周期目のAT期待度は **約50%**。

### modeAfterReset

- 設定変更後はリセット専用優遇として、2周期 / 4周期天井が中心。
- 公開解析ではモードEが2周期 / 4周期を1:1で選択する構造。
- 通常A〜Dの詳細抽選率までは実機完全再現用内部抽選に踏み込むため本DBでは省略。

### stateAfterReset

- 設定変更時は内部状態RESET。
- 朝一「ナイトサファリ」開始。ナイトサファリ中はフレンズLvなどの獲得抽選が優遇される。
- 設定変更後およそ20Gは内部シングルボーナス未成立状態から始まるため、フリーズ発生率が相対的に上昇する解析あり。

### advantageousSectionReset

- 設定変更: **RESET**。
- 据え置き: **CARRY_OVER**。
- 純電源OFF→ON: **CARRY_OVER**。

### resetBenefits

- 1周期目AT期待度: **約50%**。
- 2周期 / 4周期天井選択: **合計95%以上**、比率 **1:1**。
- 設定変更後1周期まで打った場合、公開解析条件下では期待出玉率 **100%超** とする資料あり。
- 2 / 4周期天井までを含む立ち回りでも100%超とする解析あり。
- 朝一ナイトサファリによるフレンズLv等の抽選優遇。
- 設定変更後約20Gはフリーズ確率上昇区間。

### resetPenalties

- 設定変更固有の主要な不利要素は **NONE_CONFIRMED**。
- 期待値100%超の表記は押し順・色ベル等の取得条件を含む解析値であり、無条件保証ではない。

### resetDetection

- 朝一ナイトサファリ開始は **設定変更濃厚** の判断材料。
- 有利区間ランプはクレジット表示付近。朝一点灯なら **据え置き濃厚**、朝一消灯なら **設定変更の有力材料**。
- AT終了時にもランプが消灯する場合があるため、消灯単独を100%確定契約にはしない。
- 下パネル点滅等の朝一挙動も解析上の変更示唆として利用可能。

### numericResetData

- 設定変更後1周期目AT期待度: **約50%**。
- 設定変更後2周期 / 4周期天井選択: **合計95%以上**。
- 上記2周期 : 4周期 = **1 : 1**。
- 設定変更後約20G: フリーズ発生率上昇。
- 条件付き朝一期待出玉率: **100%超** とする解析あり。

### publicMorningNumbers

- 1周期目AT期待度 約50%。
- 2周期 / 4周期天井 合計95%以上、1:1。
- 設定変更後約20Gのフリーズ高確率化。

## resetBehavior QAメモ

- 設定変更 / 据え置き / 純電源OFF→ONを分離して確認。
- HAZUSE系解析では設定変更と電源ON/OFFを表形式で比較し、有利区間・天井・内部モードについてRESET / CARRY_OVERを直接掲載。
- なな徹では設定変更 / 据え置き比較、1周期目約50%、2/4周期天井95%以上、ナイトサファリ、ランプ判別、変更後約20Gのフリーズ確率上昇を再照合。
- 1gekiでも8周期/999G天井と設定変更後2/4周期優遇を再照合。
- 純電断後の表示ステージだけは直接固定できないため、その項目のみUNVERIFIEDとして残した。

## sources

取得日: 2026-09-12

1. P-WORLD業界ニュース — サミー『ぱちすろ けものフレンズ』発表
   - https://news.p-world.co.jp/articles/19999/nippon
   - 型式系統、製造ロデオ、純増約9.5枚/G、初当り概要、5月下旬導入
   - reliability: INDUSTRY
2. サミー MySlot NEWS
   - https://new.sammy.co.jp/japanese/myslot/news/
   - 2022-05-23ホール導入日を確認
   - reliability: OFFICIAL
3. HAZUSE — ぱちすろ けものフレンズ
   - https://hazuse.com/machine/pachislot/1S1609/
   - 型式 S けものフレンズ FS、検定番号1S1609、2022-05-23、機械割97.7〜107.7%、純増約9.5枚/G
   - reliability: ANALYSIS_HIGH / OLD_DB
4. なな徹 — ぱちすろ けものフレンズ 機種情報
   - https://nana-press.com/kaiseki/machine/357/
   - 設定別AT初当り、機械割、約32.3G/50枚、純増、導入日
   - reliability: ANALYSIS_HIGH
5. なな徹 — リセット/設定変更・朝一挙動
   - https://nana-press.com/kaiseki/machine/357/9548/
   - 有利区間/天井/内部状態のRESET・CARRY_OVER、朝一数値、ランプ、フリーズ挙動
   - reliability: ANALYSIS_HIGH
6. なな徹 — 天井/モード
   - https://nana-press.com/kaiseki/machine/357/9547/
   - 2/4/6/8周期天井、各モード最大周期
   - reliability: ANALYSIS_HIGH
7. 1geki — ぱちすろ けものフレンズ 天井・設定変更
   - https://1geki.jp/slot/s_kemono_friends/3/
   - 8周期/999G、変更後1周期約50%、2/4周期合計95%以上、1:1
   - reliability: ANALYSIS_HIGH
8. パチ7 — ぱちすろ けものフレンズ
   - https://pachiseven.jp/machines/6510
   - 2022-05-23導入、メーカー/天井の再照合
   - reliability: ANALYSIS

## missingFields

- 純電源OFF→ON後の表示ステージ契約
- 店舗対策を含むランプ判別の完全確定性

## conflicts

- 主要性能値・導入日に重大な数値競合なし。
- 製造主体はロデオ、販売・ブランドはサミーとして資料表記差を役割分離して保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_TABLES
confidence: HIGH_CORE / HIGH_RESET
