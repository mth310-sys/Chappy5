# ランブルローズ

machineName: ランブルローズ
manufacturer: KPE
releaseDate: 2006-08
generation: 5号機初期
systemType: ノーマル系 + 技術介入チャレンジタイム
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 110.0% |

設定1〜5は5号機クロニクルと別二次資料で一致。設定6=110.0%は別二次資料で補完。
信頼度: ANALYSIS_HIGH（設定1〜5） / ANALYSIS_SINGLE（設定6）

## initialHitBySetting

再探索で中古実機専門店の機種概要から設定別BIG確率と全設定共通REG確率を回収。解析専門資料での独立再照合は未取得のため `ANALYSIS_SINGLE` とする。

| 設定 | BIG | REG | 合算（計算値） |
|---|---:|---:|---:|
| 1 | 1/504 | 1/437 | 約1/234.06 |
| 2 | 1/452 | 1/437 | 約1/222.19 |
| 3 | 1/423 | 1/437 | 約1/214.94 |
| 4 | 1/386 | 1/437 | 約1/204.96 |
| 5 | 1/364 | 1/437 | 約1/198.59 |
| 6 | 1/336 | 1/437 | 約1/189.95 |

合算は上記公開BIG/REG確率から本DBで算出した参考値で、元資料の直接掲載値ではない。

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

「ランブルローズ / KPE / 1000円 / 50枚 / ベース / コイン持ち / 小役確率」等へ検索語を変え、公式アーカイブ・業界記事・旧DB・実機販売資料・回顧資料を再探索したが、比較可能な50枚ベースは確定できなかった。

## netIncrease

通常のAT/ART純増値としては該当なし。チャレンジタイム中の増加性能は技術介入結果に依存するため、固定純増値として扱わない。

## basicPayout

- BB: 約312枚
- RB: 12回遊技または8回小役成立で終了
- ランブルチャンス中のチャレンジボーナス: 目押し成功度により約170〜200枚、フリー打ちでは100枚未満になる場合ありとする二次資料あり

## modeSpecificMinimumData

- コナミ公式アーカイブで2006年8月稼働開始、5号機ノーマルを確認。
- 後年の業界記事ではKPE参入第1弾で、前身機はチャレンジタイム中の技術介入が特徴のノーマルAタイプと説明。
- 青7揃いから始まる「ランブルチャンス」は、253枚超の払い出し、REGまたはシングルボーナス成立等で終了する2種BB/チャレンジタイム系の特殊区間として専門解説あり。

## resetBehavior

### settingChangeBehavior

`UNVERIFIED_AFTER_RESEARCH`。

「ランブルローズ / KPE / 設定変更 / リセット / 朝一 / チャレンジタイム / RAM / 設定変更後」等へ検索語を変更し、公式アーカイブ、当時/後年業界記事、旧機種DB、実機販売資料まで横断したが、初代ランブルローズ固有の設定変更時処理を直接示す資料は確認できなかった。

後継の `ランブルローズXX` / `ランブルローズ3D` のリセット・モード仕様は別機種のため流用しない。

### carryOverBehavior

通常時ゲーム数天井: `NONE_CONFIRMED`。

据え置き時にチャレンジタイム / 2種BB内部状態や成立済みボーナス状態がどのように保持されるかは `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

電源OFF→ONのみの場合のチャレンジタイム状態、成立済みボーナス、初期出目等の扱いは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

通常時ゲーム数天井 / 周期管理: `NONE_CONFIRMED`。

本機の「ランブルチャンス」は通常時ゲーム数天井ではなく、青7から始まるチャレンジタイム系区間として区別する。

### ceilingAfterReset

通常天井 / リセット短縮天井 / 朝一専用天井: `NONE_CONFIRMED`。

### modeAfterReset

通常時モード管理 / 朝一専用モード / 設定変更時モード振り分け: `NONE_CONFIRMED`。

### stateAfterReset

チャレンジタイム / 2種BB内部状態の設定変更時処理: `UNVERIFIED_AFTER_RESEARCH`。

一般的な後継機のART/CZ状態を初代へ読み替えない。

### advantageousSectionReset

`NOT_APPLICABLE`（5号機初期、有利区間制度前）。

### resetBenefits

短縮天井、朝一専用RT/ART、専用モード、初当たり優遇: `NONE_CONFIRMED`。

### resetPenalties

`NONE_CONFIRMED`。

### resetDetection

ガックン、初期出目、液晶状態などによる初代ランブルローズ固有の設定変更 / 据え置き判別法は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

設定変更時専用の比較可能な公開朝一数値: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. コナミアミューズメント 機種アーカイブ — 2006年 ランブルローズ
   - https://www.konami.com/amusement/psm/archive/ps/2006/rumble/
   - 2006年8月稼働開始、5号機ノーマル。
   - reliability: OFFICIAL
2. 5号機クロニクル — KPE 5号機一覧
   - https://5goki.com/kpe
   - 2006/8、設定1〜5の機械割95.0/98.0/101.0/104.0/107.0%。設定6欄は空欄。
   - reliability: ANALYSIS_SINGLE
3. marimo0925.net — ランブルローズシリーズ機械割ランキング
   - https://www.marimo0925.net/pachislot-kikaiwar-ranking-rumbleroses-ban/
   - 設定1〜6機械割95.0〜110.0%、BB約312枚、ランブルチャンス中の技術介入獲得性能。
   - reliability: ANALYSIS_SINGLE
4. パチ7 — 5号機のボーナス構造解説
   - https://pachiseven.jp/articles/detail/7071
   - 2006年8月KPE機として、ランブルチャンスの2種BB/CB高確率構造を解説。
   - reliability: ANALYSIS_HIGH
5. グリーンべると — KPE『ランブルローズXX』発表記事
   - https://web-greenbelt.jp/00003794/
   - 初代ランブルローズをKPE参入第1弾、チャレンジタイム中の技術介入が特徴のノーマルAタイプと回顧。
   - reliability: INDUSTRY
6. 中一商事 — KPE ランブルローズ 中古パチスロ実機
   - https://www.nakaiti.com/html/sKpe040.html
   - 型式名ランブルローズ、ノーマル、BIG 1/504〜1/336、REG 1/437、出玉率95〜110%。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数
- チャレンジタイムの比較可能な純増/G
- 設定別BIG/REG確率の独立した第二資料照合
- 設定変更 / 据え置き / 電源OFF→ON時のチャレンジタイム・2種BB内部状態処理
- 本機固有の設定変更判別法

## conflicts

- 5号機クロニクルは設定6機械割欄が空欄だが、別二次資料では110.0%。設定1〜5の一致を確認した上で設定6はANALYSIS_SINGLEとして分離保持する。
- 後継 `ランブルローズXX` / `ランブルローズ3D` にはART・モード・天井仕様が存在するが、初代とは別仕様のためCONFLICTではなく流用禁止対象とする。
