# L ゴジラ対エヴァンゲリオン

recordNo: 1625
machineName: L ゴジラ対エヴァンゲリオン
aliases: スマスロ ゴジラ対エヴァンゲリオン / ゴジエヴァ / ゴジラvsエヴァンゲリオン / エヴァゴジ
manufacturer: ビスティ（製造: ジェイビー）
formalModel: Lゴジラ対エヴァンゲリオンjA
inspectionCode: 3S1349
releaseDate: 2024-02-05
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス経由・ゲーム数上乗せ型
settings: 1 / 2 / 4 / 5 / 6（設定L搭載）
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチマガスロマガ、HAZUSE、主要解析で2024-02-05導入開始が一致。
- 業界団体転載の遊技通信web記事で2024年2月上旬導入予定を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 長崎県遊技業協同組合掲載の遊技通信web記事で型式名 `Lゴジラ対エヴァンゲリオンjA`、ビスティ製を確認。
- HAZUSEで同型式、検定番号 `3S1349` を確認。
- Ativoで製造ジェイビー、メーカー/ブランド ビスティとして確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- 1: 97.7%
- 2: 99.2%
- 4: 104.6%
- 5: 110.7%
- 6: 114.9%
initialHitBySetting:
- setting1: BONUS 1/299.9 / AT 1/581.8
- setting2: BONUS 1/292.2 / AT 1/552.7
- setting4: BONUS 1/272.3 / AT 1/487.8
- setting5: BONUS 1/256.7 / AT 1/446.2
- setting6: BONUS 1/244.8 / AT 1/407.3
baseGamesPer50: 約33G/50枚
netIncrease:
- 疑似BONUS: 約5.0枚/G
- AT「ゴジエヴァRUSH」: 約5.0枚/G
basicPayout:
- エヴァンゲリオンBONUS: 20G / 約100枚
- ゴジラBONUS: 20G / 約100枚
- G覚醒チャレンジ: 20G / 約100枚、AT濃厚
- RUSHチャレンジ: 5G+α / AT期待度約57%
- AT「ゴジエヴァRUSH」: ゲーム数上乗せ型
- 上位AT「G覚醒RUSH」: 初回100G以上 / 平均継続率約77%とする業界・解析資料あり
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時最大1000G+αでBONUS当選。
- AT非当選のBONUS最大8スルー後、9回目BONUSでAT当選。
- 設定変更後は両天井が短縮される。
- AT終了後70G以内でのBONUS当選はAT引き戻し濃厚（前兆が70G以内開始なら当選が70G超でも有効）。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時はBONUS間天井RESET、ATスルー天井RESET、内部モード/状態RESET。
- BONUS間天井は通常最大1000G+αから最大700G+αへ短縮。
- AT天井は通常最大9回目BONUSから最大5回目BONUSへ短縮。
- 有利区間は設定変更でRESETとする複数攻略資料が一致。
- 設定変更時は「希望の羽ポイント」の規定ポイント短縮抽選があり、約6.3%とする複数解析資料を確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時はBONUS間天井・ATスルー天井・内部モード/状態CARRY_OVER。
- 有利区間もCARRY_OVERとする解析資料を確認。
- 朝一開始ステージは設定変更/電断ともNERV本部となるため、画面だけでの直接判別は困難。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ONのみではBONUS間天井CARRY_OVER。
- ATスルー天井CARRY_OVER。
- 内部モード/状態CARRY_OVER。
- 有利区間CARRY_OVERとする複数攻略資料を確認。
- 開始ステージはNERV本部。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 通常BONUS間天井: 最大1000G+α。
- 通常ATスルー天井: 最大9回目BONUS。
- 設定変更: RESETし700G+α / 最大5回目BONUSへ短縮。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- BONUS間天井: 最大700G+α。
- ATスルー天井: 最大5回目BONUS。
- 具体的な設定変更専用の1〜5回目AT天井振り分け率は、機種名/型式/メーカーと「朝一」「スルー天井」「振り分け」を変えて再探索したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_MAXIMUMS / PUBLIC_VALUE_NOT_FOUND_FOR_DISTRIBUTION

### modeAfterReset
- 設定変更時は内部モードRESET、純電断/据え置きはCARRY_OVERとする機種固有比較資料を確認。
- モード名別の設定変更専用初期振り分け表は主要解析を横断後も公開固定値を確認できず、推測で補完しない。
confidence: ANALYSIS_HIGH_FOR_RESET_CARRYOVER_CONTRACT / PUBLIC_VALUE_NOT_FOUND_FOR_RESET_MODE_TABLE

### stateAfterReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間移行時等の初期状態振り分けは設定1/2/4/5/6で、通常89.1/86.7/83.6/81.3/78.9%、高確10.2/12.5/15.6/18.0/20.3%、超高確0.8%共通とする攻略資料あり。これは設定変更専用表ではなく「有利区間移行時・BONUS後・AT後」共通対象として区別して保持する。
confidence: ANALYSIS_HIGH_FOR_RESET_CARRYOVER / ANALYSIS_SINGLE_FOR_INITIAL_STATE_TABLE

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 希望の羽ポイントは有利区間リセットまで持ち越される解析があり、設定変更による区間RESET時は前日蓄積を失う。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- BONUS間天井1000G+α → 700G+αへ短縮。
- ATスルー天井最大9回目 → 最大5回目BONUSへ短縮。
- 約6.3%で希望の羽ポイント規定値の短縮抽選。
- 設定変更後1G目の強レア役は大チャンスとする解析情報あり。ただし具体的当選率は公開固定値を確認できないため数値化しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_CEILINGS_AND_6_3_PERCENT

### resetPenalties
- 前日のBONUS間/スルー天井進行・内部モード/状態・有利区間および希望の羽ポイント持越し価値は設定変更で失われる。
- 設定変更専用の固定的なマイナス期待値/不利益率は公開確認できず。
confidence: ANALYSIS_HIGH_FOR_RESET_ITEMS / PUBLIC_VALUE_NOT_FOUND_FOR_NUMERIC_PENALTY

### resetDetection
- 設定変更/純電断とも開始ステージはNERV本部のため、開始画面のみでは判別困難。
- 朝一BONUS間700G+αを超えてBONUS非当選なら据え置き濃厚材料。
- 朝一で5回目BONUSを超えてもAT非当選なら据え置き濃厚材料。
- メニュー画面のシンジ白は設定変更/電断後デフォルトであり、両者の区別には使えない。
- 本機固有リールガックン条件/発生率は `ゴジラ対エヴァンゲリオン / ゴジエヴァ / Lゴジラ対エヴァンゲリオンjA / ビスティ / ジェイビー` × `ガックン / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON` で再探索したが、高信頼の機種固有契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_SCREEN / UNVERIFIED_FOR_GACKUN

### numericResetData
- 設定変更後BONUS間最大天井: 700G+α。
- 設定変更後ATスルー最大天井: 5回目BONUS。
- 通常BONUS間最大天井: 1000G+α。
- 通常ATスルー最大天井: 9回目BONUS。
- 希望の羽ポイント規定短縮抽選: 約6.3%。
- 有利区間移行時等の初期内部状態（設定1/2/4/5/6）: 通常89.1/86.7/83.6/81.3/78.9%、高確10.2/12.5/15.6/18.0/20.3%、超高確0.8%共通（設定変更専用ではない）。

### publicMorningNumbers
- リセット後BONUS間最大天井: 700G+α。
- リセット後ATスルー最大天井: 5回目BONUS。
- 希望の羽ポイント規定短縮: 約6.3%。

## missingFields
- 設定変更後AT天井1〜5回目の個別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用モード振り分け表: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 型式表記は一部二次資料に `LゴジラvsエヴァンゲリオンG` があるが、業界団体転載記事・HAZUSE・複数資料の `Lゴジラ対エヴァンゲリオンjA` をcanonicalとし、前者は通称/誤記候補として採用しない。
- 通常天井は999G/1000G+α表記差がある。液晶/解析上の表現差として、比較用canonicalは「最大1000G+α」を採用し、平均化しない。
- 主要設定別BONUS/AT確率・出玉率には実質的な数値CONFLICTを確認せず。

## sources
retrievedAt: 2026-09-14
- 長崎県遊技業協同組合（遊技通信web転載）— 型式Lゴジラ対エヴァンゲリオンjA、ビスティ製、純増、BONUS/AT概要、2024年2月上旬導入: https://nagasaki-yukyo.or.jp/information/%E6%9C%80%E5%BC%B7%E3%82%B3%E3%83%A9%E3%83%9C%E3%81%8C%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%81%A7%E5%88%9D%E7%99%BB%E5%A0%B4%EF%BC%81%E3%80%8C%EF%BD%8C%E3%82%B4%E3%82%B8%E3%83%A9%E5%AF%BE%E3%82%A8/
- HAZUSE — 型式、検定番号3S1349、導入日、機械割、ベース、純増: https://hazuse.com/machine/pachislot/3S1349/
- Ativo — 製造ジェイビー、検定番号、型式、BONUS約100枚: https://ativo.jp/2024/01/25/l-%E3%82%B4%E3%82%B8%E3%83%A9%E5%AF%BE%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3/
- パチマガスロマガ — 2024-02-05、出玉率、約33G/50枚、純増5.0枚/G、通常天井: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/43/kh01.php
- 一撃 天井/朝一 — 1000G→700G、9回→5回、設定変更/電源OFF ON比較、希望の羽約6.3%、開始ステージ/メニュー: https://1geki.jp/slot/l_gojieva/3/
- なな徹 天井 — 設定変更時700G/5回短縮: https://nana-press.com/kaiseki/machine/688/19493/
- Altema 朝一 — 設定変更/電源OFF ON時の有利区間・天井・内部モード/状態比較: https://altema.jp/pachimo/lgojievaasaiti
- Altema 希望の羽 — 約6.3%短縮、ポイントは有利区間リセットまで持越し: https://altema.jp/pachimo/lgojievahane
- フリック7 — 有利区間移行時等の初期内部状態振り分け: https://flick7.net/slot/reset_guide2024.php
- スロ手帳 — 2024-02-05、約33G/50枚、1000G→700G、9回→5回: https://slot-diary.com/godzi-eva-tennjo/

## notes
- 通常時全モード移行、小役別状態移行、AT中上乗せ詳細等は実機完全再現用のためミッションv0.7対象外。
