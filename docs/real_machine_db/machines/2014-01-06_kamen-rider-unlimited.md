# パチスロ仮面ライダーUNLIMITED

machineName: パチスロ仮面ライダーUNLIMITED
aliases: パチスロ仮面ライダー UNLIMITED / 仮面ライダーUNLIMITED / 仮面ライダーアンリミテッド
manufacturer: タイヨーエレック
modelName: パチスロ仮面ライダーZR
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2014-01-06
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: AT / CZ / 内部モード / 内部状態 / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- K-Navi / パチビーで **2014-01-06ホール導入開始**を確認。
- パチマガスロマガは2014年1月機として掲載。
- 一部中古実機・後年一覧には2013年12月表記があるため、発売/流通月と実ホール導入具体日の差として注記し、本DB時系列キーは複数の具体日資料が一致する2014-01-06を採用。
- 型式名 **パチスロ仮面ライダーZR**は中古実機資料で確認。検定番号は表記揺れ・型式名・メーカー名で再探索したが安全に固定できずUNVERIFIED。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_HALL_DATE / ANALYSIS_SINGLE_FOR_MODEL_NAME

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.7% |
| 3 | 100.8% |
| 4 | 104.2% |
| 5 | 107.5% |
| 6 | 112.2% |

- pacnk整理値で確認。
- P-WORLDはAT初当たりを掲載するが取得本文では機械割表が露出しなかったため、現時点の機械割は単一整理資料値として保持。
- confidence: ANALYSIS_SINGLE

## initialHitBySetting

### AT初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/350.0 |
| 2 | 1/337.8 |
| 3 | 1/318.7 |
| 4 | 1/289.1 |
| 5 | 1/265.3 |
| 6 | 1/234.5 |

- P-WORLD / pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### CZ「変身モード」突入

| 設定 | 確率 |
|---|---:|
| 1 | 1/321.5 |
| 2 | 1/319.8 |
| 3 | 1/289.2 |
| 4 | 1/289.7 |
| 5 | 1/257.1 |
| 6 | 1/229.6 |

- 初当たり構造上重要な補助値として保存。
- confidence: ANALYSIS_SINGLE

## baseGamesPer50

- **約30G/1000円（50枚）**。
- パチマガスロマガの小役確率ページで直接確認。
- confidence: ANALYSIS_HIGH

## netIncrease

- AT「ライダーラッシュ」は **純増約2.5枚/G**。
- 娯楽産業 / グリーンべると / P-WORLD / K-Navi / パチビーで一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「ライダーラッシュ」:
  - ゲーム数解除 / 特定小役解除 / 救出モード経由は **初回100G**。
  - CZ「変身モード」経由は **初回30G + サイクロンクラッシュ上乗せ**で、公開説明上 **合計平均約100G**。
  - 2セット目以降の初期ゲーム数は **30 / 50 / 100G**。
- 当時業界発表では初回100G時に最低約250枚獲得可能と説明。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は複数の天井モードで管理。
- 公開整理資料では **通常モード / アマゾーンモード / 天国A / 天国B**を確認。
- 通常時の全モード移行テーブルは物差しDB対象外。設定変更でモード再抽選される事実のみresetBehaviorへ保存。

## ceiling

- 通常モード / アマゾーンモード: **最大1400G消化でAT当選**、最大7G前兆の公開整理あり。
- 天国A / 天国B: **100G天井**。
- パチマガスロマガにも「天井は1400Gに特典あり」とする当時解析項目が残る。
- 天井到達ATの初期ゲーム数は100Gとする必勝本資料あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__GAME_RESET_AND_MODE_REROLL_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **天井ゲーム数リセット**。
- 設定変更時は **内部モード再抽選**。
- K-Naviには本機専用「設定変更後の挙動」「モード移行率（設定変更時）」項目が現存し、pacnkでも設定変更時にモード再抽選・天井Gリセットを明記。
- ただし設定変更時モードの具体的設定別振り分け数値は、検索語・資料系統を変えて再探索しても安全に復元できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### carryOverBehavior

- 純据え置き時の天井G / モード / 内部状態について、本機専用の直接保持契約は「据え置き / 宵越し / 朝一 / 天井 / モード / 状態」を組み替えて再探索したが安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時リセットの反対だからという理由で据え置き保持を自動補完しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ**の天井G / モード / 内部状態について、「電源OFF ON / 電源オフ / 電断 / 朝一」等へ検索語を変えて再探索したが直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **CLEAR_CONFIRMED**。
- 設定変更時は天井ゲーム数がリセットされる。
- 据え置き / 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更時は前日天井進捗がCLEAR。
- 設定変更後にモード再抽選されるため、抽選結果が天国A/Bなら **100G天井**、通常/アマゾーンなら **最大1400G**。
- ただし「設定変更専用の固定短縮天井」が存在することは確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 100Gは天国モード自体の天井であり、リセット専用固定値と混同しない。

### modeAfterReset

- **REROLL_CONFIRMED**。
- 設定変更時にモード再抽選される。
- K-Naviには「モード移行率（設定変更時）」解析項目が存在。
- 具体的な設定別振り分け表: **UNVERIFIED_AFTER_RESEARCH**。ページ見出しの存在から数値を推測しない。

### stateAfterReset

- 本機には通常時の内部状態が存在し、K-Naviにも「内部状態の基本」「状態移行率（通常時）」項目が残る。
- ただし設定変更時の内部状態再抽選 / 初期状態振り分けを直接示す本機専用数値は十分再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時にモード再抽選が行われ、抽選結果が天国A/Bなら **100G以内が天井**となる可能性がある。
- パチマガスロマガには本機専用の朝イチ・設定変更項目として **「朝イチは即当たりのチャンス!」**が残る。
- ただし朝一100G以内当選率や天国移行率の具体数値は安全に回収できず、数値恩恵は **UNVERIFIED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時は前日までの天井ゲーム数進捗が失われる。
- その他の設定変更専用不利抽選は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、表示変化など、設定変更 / 据え置きを確定または高信頼で判別する直接情報は、表記揺れ・型式名・メーカー名を含め再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一早期当選は天国再抽選の可能性と整合するが、変更確定判別には使用しない。

### publicMorningNumbers

- 設定変更時モード具体振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一100G以内当選率: **UNVERIFIED_AFTER_RESEARCH**。
- 確認可能な比較数値は、天国A/B滞在時の天井 **100G**、通常/アマゾーン最大 **1400G**。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時モードの設定別具体振り分け: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の内部状態初期振り分け: UNVERIFIED_AFTER_RESEARCH。
- 純据え置き時の天井G / モード / 状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 電源OFF→ONのみの天井G / モード / 状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 本機固有のガックン等変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 導入時期は後年資料に2013年12月表記もある一方、K-Navi / パチビー / ALL7系の具体日資料では **2014-01-06**。本線は具体的ホール導入日を優先し、2013-12表記を削除せず発売/流通月差候補として保持。
- 2024年「L 仮面ライダー 7RIDERS」や2025年「L 仮面ライダー電王」とは別機種。後年スマスロのリセット仕様を本機へ混入しない。
- 「天国100G」は設定変更専用固定短縮ではなく、天国A/Bモード自体の天井として保持。

## sources

取得日: 2026-09-06

- 娯楽産業 2013-11-05 新機種発表: https://www.goraku-sangyo.com/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%82%A8%E3%83%AC%E3%83%83%E3%82%AF%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E4%BB%AE%E9%9D%A2%E3%83%A9%E3%82%A4%E3%83%80/
- グリーンべると 2013-11-13: https://web-greenbelt.jp/00001200/
- K-Navi: https://p-kn.com/slot/1979/
- P-WORLD: https://www.p-world.co.jp/machine/database/7260
- パチビー 基本情報: https://www.pachibee.jp/machines/about/213110009
- パチビー 機種ページ: https://www.pachibee.jp/machines/index/213110009
- パチマガスロマガ 機種TOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/16/taiyoelec_slot_16.php
- パチマガスロマガ 小役/1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/16/c-1.php
- パチ＆スロ必勝本 AT概要: https://p.hisshobon.jp/machine/2322/1/43619
- pacnk 設定判別/天井/リセット整理: https://pacnk.com/slot/tools/sh_kamenrider.html
- 中古実機パチマ 型式名: https://www.pachima.com/c/slot/s_23sammyk/S00209
