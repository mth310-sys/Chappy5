# ジャックポットドリームプラス

machineName: ジャックポットドリームプラス
aliases: パチスロ ジャックポットドリームプラス / JACKPOT DREAM PLUS
manufacturer: 岡崎産業
releaseDate: 2014-02-17
releaseDatePrecision: exact_hall_start_single_period_analysis_plus_monthly_crosscheck

generation: 5号機
systemType: ART / ボーナス契機併用 / 7セグ告知
recordStatus: PARTIAL_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- K-Naviの当時機種ページでホール導入開始 **2014-02-17** を確認。
- P-WORLDで型式名 **ジャックポットドリームプラスＤ１** を確認。
- 岡崎産業5号機一覧・後年整理資料でも2014年導入機として一致。
- 検定番号は、機種名・型式名・岡崎産業・「検定」「型式」「3S」を組み替えて再探索したが今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_FOR_EXACT_DATE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 99.2% |
| 3 | 101.1% |
| 4 | 103.6% |
| 5 | 107.1% |
| 6 | 108.6% |

- K-Navi、P-WORLD、pacnk、後年シリーズ整理で同一値を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/185.9 |
| 2 | 1/173.9 |
| 3 | 1/168.0 |
| 4 | 1/160.1 |
| 5 | 1/154.1 |
| 6 | 1/141.0 |

- K-Navi、P-WORLD、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 「ジャックポットドリームプラス / ジャックポットドリームプラスD1 / 岡崎産業」に「50枚 / 1000円 / ベース / コイン持ち」を組み合わせ、当時解析・古いDB・後年回顧を再探索したが、比較可能な直接値を安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。

## netIncrease

- ART「ドリームラッシュ」: **約2.0枚/G**。
- 1セット **33G+α**。
- K-Navi、P-WORLD、後年シリーズ整理で同系統を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「ドリームラッシュ」: **1セット33G+α / 純増約2.0枚/G**。
- ドリームボーナス: 後年シリーズ整理で **約40枚**、当選後は **111G以上のART濃厚**とされる。
- 33G×2.0枚/G＝約66枚相当は比較用のレート換算であり、保証獲得枚数として扱わない。
- confidence: ANALYSIS_HIGH_FOR_ART_CORE / ANALYSIS_SINGLE_RETROSPECTIVE_FOR_DREAM_BONUS_PAYOUT

## modeSpecificMinimumData

- 主軸はART「ドリームラッシュ」。初期33G以上。
- ART中の中段赤7揃いでゲーム数上乗せ、7セグ奇数揃いでセット数上乗せ。
- ART契機にはチャンス小役、7揃い直撃、ドリームボーナス経由、自力チャンスゾーンの押し順成功などがある。
- 詳細な小役別抽選・上乗せ振り分けは実機完全再現用のため本DB対象外。

## ceiling

- 機種名・型式名・メーカー名に「天井 / 天井ゲーム数 / 宵越し / ハマリ」を組み合わせ、K-Navi、P-WORLD、古い攻略DB、後年解析を横断したが、本機固有の固定天井ゲーム数・天井恩恵を直接確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 「天井なし」と断定できる一次/当時解析文を今回固定できていないため、NONE_CONFIRMEDとし推測しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_CONTRACT_UNVERIFIED_AFTER_MULTI_QUERY_SEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 「設定変更 / リセット / 朝一 / 宵越し / モード / 状態 / ガックン」を機種名・型式名・岡崎産業と組み替えて再探索したが、設定変更時の本機固有契約を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ART初当たり値や一般的な5号機挙動から補完しない。

### carryOverBehavior

- 純据え置き時のART関連状態、前兆、ゲーム数、CZ等の引継ぎについて、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない単純な電源OFF→ONについて、本機固有の内部状態・前兆・ART関連状態の契約を直接確認できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 固定ゲーム数天井自体を今回確認できていない。
- 設定変更 / 据え置き / 電源OFF→ON時の内部ゲーム数契約: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の短縮天井・朝一専用規定ゲーム数: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 設定変更後専用モード、モード再抽選、公開振り分け率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時のART契機情報を朝一専用モード情報へ拡張しない。

### stateAfterReset

- 設定変更時の内部状態再抽選・朝一高確率: **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 2014年導入5号機のため有利区間制度は非該当。

### resetBenefits

- 設定変更専用の短縮天井、優遇モード、朝一高確、ART/CZ優遇値: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期出目、7セグ初期表示、ランプ、朝一固定ステージ等について本機固有の変更判別契約を再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- シリーズ他機種や一般的な岡崎産業筐体挙動を転記しない。

### publicMorningNumbers

- 設定変更時モード振り分け / 朝一当選率 / 短縮天井 / リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- HANDOFFでは本機が「3月月次候補」として残っていたが、K-Naviの具体日 **2014-02-17** を確認したため、時系列漏れ防止として2/17へ遡及追加した。後年の月次表記だけで3月へ移動しない。
- 『ジャックポットドリーム』『スペシャルジャックポット』『スーパージャックポット』等の同シリーズ別機種の性能・リセット仕様を混入させない。
- 天井・resetBehaviorは一般論から逆算せず、直接確認できない箇所のみUNVERIFIED/NONE_CONFIRMEDとする。

## sources

取得日: **2026-09-06**

1. K-Navi「ジャックポットドリームプラス」
   - https://p-kn.com/slot/2009/
   - ホール導入開始2014-02-17、設定別ART初当たり、機械割、ART純増約2.0枚/G、初期33G以上。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE

2. P-WORLD「ジャックポットドリームプラス」
   - https://www.p-world.co.jp/machine/database/7314
   - 型式名ジャックポットドリームプラスＤ１、設定別出玉率、ART確率、純増約2.0枚/G、1セット33G+α。
   - confidence: INDUSTRY_DATABASE

3. pacnk「ジャックポットドリームプラス 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_jakkupottodorimupurasu.html
   - 設定別ART初当たり・PAYOUTを照合。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE_CROSSCHECK

4. 5号機クロニクル「岡崎産業 5号機全機種一覧」
   - https://5goki.com/okazaki
   - メーカー系列・2014年導入機としての存在確認。
   - confidence: RETROSPECTIVE_DATABASE

5. ジャックポットシリーズ歴代整理
   - https://www.marimo0925.net/pachislot-kikaiwari-ranking-jackpot-ban/
   - ドリームボーナス約40枚、111G以上ART濃厚、ART1セット33G以上・純増2枚/Gの後年整理。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- fixedCeilingContract: NONE_CONFIRMED_AFTER_RESEARCH
- resetBehavior direct contract: PARTIAL / UNVERIFIED_AFTER_MULTI_QUERY_SEARCH

## recordMeta

addedAt: 2026-09-06
addedAs: CHRONOLOGICAL_BACKFILL_FROM_HANDOFF_MONTHLY_CANDIDATE
chronologyReason: exact K-Navi hall-start date 2014-02-17 fixed; record was absent from main
