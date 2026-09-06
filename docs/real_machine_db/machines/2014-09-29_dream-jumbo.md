# ドリームジャンボ ～幸福のチケットを君に～

machineName: ドリームジャンボ ～幸福のチケットを君に～
manufacturer: JPS
releaseDate: 2014-09-29
releaseDatePrecision: exact_hall_start
generation: 5号機
systemType: AT / 擬似ボーナス / 完全告知
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS_AND_SOURCE_CONFLICT

## identity

- K-Navi、パチビーでホール導入開始 **2014-09-29** を確認。
- 当時業界記事（PiDEA X）では納品日を **2014-09-28予定** としているため、納品日とホール導入日を分離し、本DBのreleaseDateはホール導入開始日の2014-09-29を採用。
- 型式名: **ドリーム幸福のチケットを君にジャンボBB**。PiDEA Xの発表会記事および中古実機資料で一致。
- 数字形式の検定番号（4Sxxxx等）は、正式型式名/JPS/検定/検定番号/4Sを組み替え、業界記事、古いDB、実機資料を再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定構成は **1 / 2 / J / 4 / 5 / 6**。設定3の代わりに設定Jを搭載。
- PiDEA Xは設定Jを開発担当者説明として「期待度150%（出玉率は非公表）」と記載。パチマガスロマガのメーカー発表表も設定JのPAYOUT/AT初当たりを **非公表** とするため、150%を機械割として転記しない。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 / PAYOUT |
|---:|---:|
| 1 | 97.19% |
| 2 | 98.66% |
| J | 非公表 |
| 4 | 99.86% |
| 5 | 108.89% |
| 6 | 112.95% |

- パチマガスロマガの **メーカー発表値** を主値とする。
- 後年/他解析資料の丸め値 97.2 / 98.7 / 99.9 / 108.9 / 113.0% と整合。
- 設定Jの「期待度150%」はメーカー公表PAYOUTではないため別定義として保持し、機械割欄は非公表のままとする。
- confidence: ANALYSIS_HIGH_MANUFACTURER_PUBLISHED_TABLE_PLUS_MULTI_SOURCE_ROUNDING_MATCH

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/297.65 |
| 2 | 1/276.03 |
| J | 非公表 |
| 4 | 1/263.60 |
| 5 | 1/178.45 |
| 6 | 1/145.87 |

- パチマガスロマガのメーカー発表値を主値とする。
- 複数解析/回顧資料は設定1を約1/297.6～297.65として一致。
- 一方、スロパチクエスト機種まとめの設定1だけ **1/279.65** とする表記がある。設定2/4/5/6はメーカー表と一致するため、平均せず `CONFLICT_SOURCE_TYPO_SETTING1_AT_279_65_VS_MANUFACTURER_297_65` として保持し、メーカー発表値1/297.65をcanonicalとする。
- confidence: ANALYSIS_HIGH_MANUFACTURER_PUBLISHED_TABLE_WITH_SINGLE_SOURCE_CONFLICT

## baseGamesPer50

- **約32G/50枚**。
- 当時/後年解析でコイン持ち約32Gを確認。物差し比較値は約32Gとして保持し、過度な小数精度を付与しない。
- `50枚 / 1000円 / コイン持ち / ベース / 32G`、正式機種名/型式名/JPSを組み替えて再探索。
- confidence: ANALYSIS_MULTI_SOURCE_APPROXIMATE

## netIncrease

- AT「ジャンボーナス」: **約3.0枚/G**。
- PiDEA X、K-Navi、パチビー、パチマガスロマガで一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「ジャンボーナス」: **初期33G以上 / 純増約3.0枚/G**。
- 初期ゲーム数はカウントアップ型で大きく変動し、ダブル7揃いで初期G数が2倍となる仕様がある。
- 実獲得枚数を純増×G数から機械的に固定せず、比較用には **33G以上・約3.0枚/G** を保存。
- ロングフリーズ「ドリームルーレット」には大きな初期G数契機があるが、完全再現用の詳細振り分けは本DB対象外。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は **モードや状態の概念なし**。パチマガスロマガは毎ゲームAT抽選が一定で、CZ等の確率アップ状態もないと明記。
- 第1天井: **AT間767G+前兆**。約60%でAT当選。
- 第2天井: **AT間1466G+前兆**。AT確定 + AT初期G数アップ要素「ファイアー」高確率。
- 前兆は最大32Gとする当時解析あり。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 当時解析で、設定変更時は **AT本前兆からスタートする可能性**がある。
- そのリセット本前兆スタート時は **AT初期ゲーム数が優遇**される。
- 設定変更時のショートフリーズ発生率が通常 **1/419.45** から **1/202.93** へ上昇する解析値あり。
- 一方、設定変更操作によってAT間767G/1466G天井カウンタが必ず0へクリアされることを直接示す高信頼対照表は、設定変更/リセット/朝一/天井/据え置き/宵越し/電源OFF ONを再探索しても今回固定できず、カウンタ処理は `UNVERIFIED_AFTER_RESEARCH`。リセット恩恵の存在だけからRESETを推定しない。
- confidence: ANALYSIS_HIGH_FOR_RESET_SPECIAL_START_AND_FREEZE_RATE / UNVERIFIED_FOR_COUNTER_OPERATION

### carryOverBehavior

- 設定据え置き時のAT間767G/1466G内部ゲーム数、前兆進行、その他内部値の直接対照契約を、`据え置き / 宵越し / 前日 / 天井 / 767 / 1466` と表記を変えて当時解析・古いDB・回顧資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機挙動から自動推定しない。

### powerCycleBehavior

- **設定変更なしの単純な電源OFF→ON**について、天井内部G・前兆・ショートフリーズ関連状態の直接対照資料を `電源OFF ON / 電断 / 電源入切 / 朝一 / 据え置き` で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き情報や設定変更情報を純電断契約へ拡張しない。

### gameCounterReset

- 設定変更時: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`。
- 単純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 第1/第2天井の通常値そのものは767G/1466Gで確認済み。

### ceilingAfterReset

- 通常天井は **767G+前兆（約60% AT） / 1466G+前兆（AT確定+初期G数アップ要素優遇）**。
- 設定変更後だけの固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット本前兆スタートは存在するが、固定の「リセット後○G天井」と同一視しない。

### modeAfterReset

- 通常時はそもそも **モード概念なし**の解析契約があるため、通常モード再抽選/引継ぎは `NOT_APPLICABLE_NO_NORMAL_MODE_CONCEPT`。
- ただし設定変更時にリセット専用の本前兆スタート抽選が存在するため、それは独立した朝一特殊挙動として保存。

### stateAfterReset

- 通常時は **状態によるAT当選率変動の概念なし**とする当時解析があり、一般的な高確/低確状態の再抽選は `NOT_APPLICABLE_NO_NORMAL_STATE_CONCEPT`。
- 設定変更時の本前兆スタートは例外的なリセット専用挙動として分離。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時に **AT本前兆スタートの可能性**。
- 本前兆スタート時は **AT初期ゲーム数が優遇**。
- ショートフリーズ発生率が **1/419.45 → 1/202.93** へ上昇。
- リセット本前兆スタート自体の発生率は公開数値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更時の固定的不利要素は、検索語・資料系統を変えた再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定Jの特殊挙動に関するユーザー/実戦情報は存在するが、設定変更一般の確定ペナルティとして採用しない。

### resetDetection

- **設定変更後の初回AT初当たり時、25%で「おはようございます」ボイス発生**。発生時は設定変更を確定できる解析情報として保存。
- ショートフリーズ発生率 **1/202.93** は通常 **1/419.45** より高く、統計的な変更推測材料にはなるが、単発発生だけでの確定判別とは扱わない。
- ガックン、初期出目、初期ステージのみで変更を固定できる本機固有の高信頼資料は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 初回AT「おはようございます」ボイス: **25%（設定変更時）**。
- ショートフリーズ: **通常1/419.45 → 設定変更時1/202.93**。
- リセット本前兆スタート率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- 公開朝一比較値として **ボイス25%**、**ショートフリーズ1/202.93（通常1/419.45）** を保存。
- リセット本前兆スタート率は数値非確認のため推定しない。

## resetBehavior 再探索メモ

- 表記揺れ: `ドリームジャンボ / ドリームジャンボ～幸福のチケットを君に～ / ドリーム幸福のチケットを君にジャンボBB / JPS`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 767G / 1466G / 本前兆 / おはようございます / ショートフリーズ / モード / 状態 / ガックン`。
- 資料系統: 当時業界記事、パチマガスロマガ旧解析、K-Navi、パチビー、当時攻略、古い天井DB、後年回顧、実機販売資料。
- 直接契約が取れなかった据え置き・純電断・天井カウンタ処理は一般論で補完せずUNVERIFIEDとした。

## sources

取得日: **2026-09-07**

- パチマガスロマガ ドリームジャンボ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/29/a.php
- パチマガスロマガ AT初当たり/PAYOUTメーカー発表値: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/29/h-1.php
- パチマガスロマガ AT突入フロー/モード・状態なし: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/29/l.php
- K-Navi: https://p-kn.com/slot/2112/
- パチビー: https://www.pachibee.jp/machines/about/214090000
- PiDEA X 発表会記事: https://www.pidea.jp/articles/JPS%E3%80%8C%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C%E3%80%8D%E3%81%AF%E6%9C%80%E5%A4%A7AT%E3%82%B2%E3%83%BC%E3%83%A0%E6%95%B010000G%21%3F
- スロパチクエスト 朝一設定変更: https://www.slopachi-quest.com/article/dream-jumbo-reset/
- スロパチクエスト 天井/スペック: https://www.slopachi-quest.com/article/dream-jumbo-tenzyo/
- スロパチクエスト 機種まとめ（設定1初当たり表記競合）: https://www.slopachi-quest.com/kisyubetsu/dream-jumbo/
- 楽スロ 天井/コイン持ち回顧: https://rakuslo.com/dreamjabo-tenjyo.html
- 中一商事 実機資料: https://www.nakaiti.com/html/jps003.html

## missingFields

- 数字形式の検定番号: `UNVERIFIED_AFTER_RESEARCH`
- 設定Jのメーカー公表PAYOUT/AT初当たり: `NOT_PUBLIC`
- 設定変更時のAT間天井カウンタ処理: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き時の天井カウンタ処理: `UNVERIFIED_AFTER_RESEARCH`
- 単純電源OFF→ON時の内部処理: `UNVERIFIED_AFTER_RESEARCH`
- リセット本前兆スタート率: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- `CONFLICT_SOURCE_TYPO_SETTING1_AT_279_65_VS_MANUFACTURER_297_65`: スロパチクエスト機種まとめ1/279.65 vs パチマガスロマガメーカー発表値1/297.65。複数資料が約1/297.6で一致するためcanonicalは1/297.65、競合表記自体は消さない。
- 設定J「期待度150%」はPiDEA Xの開発担当者説明で、PAYOUTは非公表。`150%`を機械割へ変換/上書きしない。
