# スーハナライジング-30

recordNo: 1595
machineName: スーハナライジング-30
manufacturer: パイオニア
formalModel: SスーハナライジングPC-30
inspectionCode: 3S0572
releaseDate: 2023-10-02
generation: 6.5号機 / 30Φメダル機
systemType: AT / 完全告知・モード管理型擬似ボーナス
settings: L / 1 / 2 / 3 / 5 / 6（設定4非搭載）

## payoutRateBySetting
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定1: 97.8%
- 設定2: 99.6%
- 設定3: 102.1%
- 設定5: 105.3%
- 設定6: 108.2%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当り
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定1: 1/216
- 設定2: 1/211
- 設定3: 1/202
- 設定5: 1/190
- 設定6: 1/180

### BIG / REG / ボーナス合算
- 設定1: BIG 1/158 / REG 1/213 / 合算 1/91
- 設定2: BIG 1/152 / REG 1/209 / 合算 1/88
- 設定3: BIG 1/143 / REG 1/202 / 合算 1/84
- 設定5: BIG 1/132 / REG 1/193 / 合算 1/78
- 設定6: BIG 1/123 / REG 1/185 / 合算 1/74
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約30.0G/50枚
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 擬似ボーナスAT: 約3.3枚/G（詳細掲載値3.34枚/G）
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIG BONUS: 60G、約200枚。
- REG BONUS: 20G、約67枚。
- 天国モードは32G以内のボーナス当選濃厚。天国Aは約67%ループ、最上位SUPER RISING MODEは約93%ループ・期待枚数約2820枚。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常モード: 通常A / 通常B / チャンス / 天国準備。
- 天国モード: 天国A / 天国B / ライジング / スーパーライジング。
- モード別天井: 通常A 約400G / 通常B 約400G / チャンス 約200G / 天国準備 約400G / 天国各種 32G。
- 通常Bはボーナス後の天国移行期待度約50%。天国準備は次回天国濃厚。
- ボーナス単発を4回スルーすると5回目のボーナス後は天国以上濃厚（天国スルー回数天井）。
- 天国終了時は有利区間をリセットし、非有利区間から天国復帰抽選を行う貫き型仕様。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更で有利区間、ゲーム数天井、モードをRESET / 再抽選。
- 内部状態もRESETとする朝一比較資料を確認。
- 設定変更時は約72%で通常B以上からスタートする。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、ゲーム数天井、モードをCARRY_OVER。
- 内部状態もCARRY_OVERとする朝一比較資料を確認。
- 天国スルー進行について、据え置き時に前日分を引き継ぐことを独立して明記した高信頼資料は今回固定できず、一般的な据え置き表から機械的補完しない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH / UNVERIFIED（スルー進行の独立明記）

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは、ゲーム数天井をCARRY_OVERする複数解析資料を確認。
- 有利区間・内部状態もCARRY_OVERとする機種固有の朝一比較資料を確認。
- 純電断単独時の「通常モード」と「天国スルー進行」をそれぞれ独立して明記した複数高信頼資料は固定できず、据え置き一般表からの機械的補完はしない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH / UNVERIFIED（モード・スルー進行の純電断単独契約）

### gameCounterReset
- 設定変更: ゲーム数天井をRESET。
- 据え置き: ゲーム数天井をCARRY_OVER。
- 純電源OFF→ON: ゲーム数天井をCARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認されていない。
- 設定変更後は選択モードに従い、通常A/B/天国準備は最大約400G、チャンスは約200G、天国各種は32G。
- 通常時最大約400G到達でボーナス当選。天井当選は基本REGで、BIGだった場合はスーパーライジングモード濃厚とする解析あり。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードを再抽選。
- 公開朝一数値として、約72%で通常B以上が選択される。
- 「通常B以上」の内訳（通常B / チャンス / 天国準備 / 天国各種）を分離した設定変更専用完全振り分けは PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 据え置きはモードCARRY_OVERとする高信頼解析を確認。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態RESETとする朝一比較資料を確認。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 内部状態CARRY_OVER。
- 本機はモード管理が朝一挙動の中心であり、設定変更専用の別個の内部状態完全振り分けは PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_SINGLE / MULTI_SECONDARY_MATCH

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- 純電源OFF→ON: 有利区間CARRY_OVERとする機種固有比較資料を確認。
- 稼働中は天国終了時にも有利区間をリセットし、天国復帰抽選を行う。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更時は約72%で通常B以上からスタートし、通常Aスタートより初当り後の天国移行に期待できる。
- 通常Bは天国移行期待度約50%。チャンスは約200G天井かつ次回通常Bまたは天国準備/天国以上が濃厚、天国準備なら次回天国濃厚。
- ただし約72%は「通常B以上」の合算値であり、その内訳は公開固定値として確認できない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日のゲーム数天井進行とモード、有利区間を失う。
- 前日が深いゲーム数または上位モード示唆済みだった場合、据え置きと比較して不利になり得る。
- 設定変更専用の追加ペナルティ固定値は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- なな徹の当時解析ではリセット判別は「現在調査中」。
- 有利区間ランプによる設定変更 / 据え置き判別は不可。
- 本機固有のリールガックン条件 / 発生率は「スーハナライジング-30 / SスーハナライジングPC-30 / パイオニア / 設定変更 / リセット / 朝一 / 据え置き / ガックン」等で再探索したが、高信頼な機種固有契約を固定できず UNVERIFIED_AFTER_RESEARCH。
- 約72%で通常B以上という朝一傾向は推測材料にはなるが、単独で変更を確定できる挙動ではない。
信頼度: ANALYSIS_HIGH / UNVERIFIED（ガックン）

### numericResetData
- 設定変更時: 約72%で通常B以上。
- 通常B: ボーナス当選後の天国移行期待度約50%。
- モード別天井: 通常A 約400G / 通常B 約400G / チャンス 約200G / 天国準備 約400G / 天国各種 32G。
- 天国スルー回数天井: 4スルー後、5回目のボーナス後は天国以上濃厚。
- 設定1のボーナス回数別天国期待度（通常稼働の参考値、設定変更専用値ではない）: 1回目22% / 2回目43% / 3回目70% / 4回目85% / 5回目100%。

### publicMorningNumbers
- 設定変更時、約72%で通常B以上スタート。
- 通常Bは天国移行期待度約50%。
- 設定変更専用固定短縮天井: NONE_CONFIRMED。通常B以上選択によるモード面の優遇が中心。

## conflicts
- 一部後年二次資料は「設定変更後は約72%で通常Bが選択」と表現するが、なな徹・パチマガスロマガ等の高信頼解析は「通常B以上 約72%」とする。canonical は包含関係を保持するため **通常B以上 約72%** とし、単独「通常B 72%」は `CONFLICT_SOURCE_WORDING_NORMAL_B_VS_NORMAL_B_OR_HIGHER` として扱う。
- 天井表記は「400G」「約400G」「400G+α」が資料により混在する。モード表の約400Gをcanonicalとし、到達境界の細部は完全再現対象外として固定しない。

## missingFields
- 設定Lの機械割 / 初当り / BIG / REG / 合算: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時「通常B以上 約72%」のモード別完全内訳: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON単独時の通常モード / 天国スルー進行の独立明記: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用内部状態完全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13
- G-net / 大阪府公安委員会検定通過情報: https://g-net-ps.com/industry/certif-2023-0721/
  - パイオニア、正式型式 `SスーハナライジングPC-30`、検定番号 `3S0572`、2023-07-21検定。
  - 信頼度: INDUSTRY
- 遊技日本 / P-WORLD 新台発表: https://news.p-world.co.jp/articles/25240/nippon
  - 型式、設定別初当り/BIG/REG/出玉率、BIG約200枚・REG約67枚、有利区間リセット型の天国ループ。
  - 信頼度: INDUSTRY
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/24726/nippon
  - 正式型式と製造メーカーを照合。
  - 信頼度: INDUSTRY
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/24853/greenbelt
  - 主要スペック、ベース約30G/50枚、最大93%ループ、期待枚数約2820枚、10月上旬導入予定。
  - 信頼度: INDUSTRY
- ゼンリン アミューズメント事業部: https://zenrin-net.co.jp/8932/
  - 型式、メーカー、納品開始日2023-10-02、30Φ仕様。
  - 信頼度: INDUSTRY
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/612/17085/
  - 設定変更/据え置きの有利区間・天井・モード、設定変更時約72%で通常B以上、有利区間ランプ判別不可。
  - 信頼度: ANALYSIS_HIGH
- なな徹 ボーナス確率・機械割: https://nana-press.com/kaiseki/machine/612/16140/
  - 設定構成、設定別初当り/BIG/REG/合算、機械割。
  - 信頼度: ANALYSIS_HIGH
- なな徹 モード解析: https://nana-press.com/kaiseki/machine/612/17087/
  - 各モードの特徴、天国期待度、天国終了時の有利区間リセット、設定1のボーナス回数別天国期待度。
  - 信頼度: ANALYSIS_HIGH
- パチマガスロマガ / 必勝本系: https://p.hisshobon.jp/vpage/2560/2
  - 基本スペック、天井、設定変更時の天井/モード/有利区間RESET。
  - 信頼度: ANALYSIS_HIGH
- パチマガスロマガ システム解説: https://p.hisshobon.jp/vpage/2560/4
  - 設定変更時約72%で通常B以上、モード別天井、各天国モード性能、BIG/REG基本性能。
  - 信頼度: ANALYSIS_HIGH
- パチビー: https://www.pachibee.jp/machines/about/223080005
  - 2023-10-02導入、6.5号機、純増3.34枚/G、BIG/REG性能、天国ループ率。
  - 信頼度: ANALYSIS_HIGH
- 一撃 ベース: https://1geki.jp/slot/s_suhana_rising30/4/
  - 約30.0G/50枚を照合。
  - 信頼度: ANALYSIS_HIGH
- クオぱち 朝一比較: https://www.pachinkoquora.com/pachinko-square/column/1534/
  - 設定変更/電源OFF→ONの有利区間・天井・内部状態比較、約72%表現を補助照合。
  - 信頼度: ANALYSIS_SINGLE
- イチカツ: https://ichikatsu.com/superhana-rising/
  - 設定変更時天井RESET、電源OFF→ONで天井引継ぎを補助照合。
  - 信頼度: ANALYSIS_SINGLE

## qa
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
recordStatus: COMPLETE_CORE_WITH_RESET_V07
