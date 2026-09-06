# 喧嘩祭

machineName: 喧嘩祭
formalModelName: 喧嘩祭KR
manufacturer: KPE
releaseDate: 2014-04-21
releaseDatePrecision: exact_hall_start
generation: 5号機
systemType: AT / 擬似ボーナス / ゲーム数解除 / CZ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL

## identity

- コナミアミューズメント公式アーカイブは本機を **2014年4月稼働 / 5号機AT** と掲載。
- パチビーは導入日 **2014-04-21**、メーカーKPEとして掲載。
- 実機流通資料で型式名 **喧嘩祭KR** を確認。
- confidence: OFFICIAL + INDUSTRY_EXACT_DATE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.4% |
| 3 | 100.3% |
| 4 | 105.0% |
| 5 | 111.1% |
| 6 | 119.1% |

- pacnk、当時攻略系、後年DBで一致する系列を採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT擬似ボーナス初当たり

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/248.8 |
| 2 | 1/240.2 |
| 3 | 1/230.1 |
| 4 | 1/205.8 |
| 5 | 1/178.3 |
| 6 | 1/147.4 |

### CZ「ガチチャンス」

| 設定 | CZ |
|---:|---:|
| 1 | 1/328.2 |
| 2 | 1/325.0 |
| 3 | 1/316.7 |
| 4 | 1/301.0 |
| 5 | 1/241.1 |
| 6 | 1/202.9 |

- pacnkの設定別解析値を主値として保持。
- confidence: ANALYSIS_HIGH

## baseGamesPer50

- **約27G/50枚**。
- 後年機種DBで確認。アクセルATのベース可変思想は当時業界記事でも確認できるが、27G自体は単一整理資料のため精度を限定。
- confidence: ANALYSIS_SINGLE

## netIncrease

- AT擬似ボーナス: **約3.0枚/G**。
- パチビー、業界記事、複数機種DBで一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 「神輿ボーナス」: **30G完走型**。
- 「喧嘩祭ボーナス」: **20G + JACゲーム（8G×α）** のJACストック型。
- 1G連による擬似ボーナス連荘を「喧嘩JACシステム」で構成。
- 固定獲得枚数型ではないため、物差し値はゲーム数と純増を保持。
- confidence: INDUSTRY

## modeSpecificMinimumData

- 通常時は規定ゲーム数の異なる **通常A / 通常B / 通常C / 天国A / 天国B** の5モード。
- 主要CZは「ガチチャンス」。擬似ボーナス「神輿ボーナス」等が出玉の中心。
- モードA/B/Cは天国移行期待度が異なり、通常C後は天国B確定とする解析あり。
- 実機完全再現用の全規定G振り分け・全内部抽選は収集対象外。

## ceiling

- ボーナス間 **999G** で擬似ボーナス確定。
- 通常時はモードごとに規定ゲーム数が異なるが、最大天井は999G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCHED_NO_DIRECT_RESET_CONTRACT_FIXED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時の天井G、通常A/B/C・天国A/B、内部高確の具体的初期化契約を、本機固有の直接資料で安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 「設定変更なら一般にリセットされる」という5号機一般論から推定しない。

### carryOverBehavior

- 純据え置き時の天井G・モード・内部状態の引継ぎ契約は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ON時の天井G・モード・内部状態は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- **UNVERIFIED_AFTER_RESEARCH**。
- 通常天井999Gの存在は確定しているが、設定変更/据え置き/電断時の処理を直接示す資料を今回固定できなかった。

### ceilingAfterReset

- 設定変更専用の短縮天井数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常最大天井999Gを、リセット後にもそのまま適用すると推測しない。

### modeAfterReset

- 設定変更時の5モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 内部高確等の設定変更時初期状態: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 公開された本機固有の設定変更専用短縮天井・優遇モード・朝一CZ優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 公開された本機固有の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、液晶ステージ、前兆ゲーム数等による設定変更判別を、当時攻略・古いDB・回顧資料へ検索語を変更して再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更専用の公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

「喧嘩祭 / KPE / 喧嘩祭KR」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モードA / 天国 / ガックン」を組み合わせ、公式アーカイブ、業界記事、パチビー、pacnk、当時2014年攻略記事、後年DBを横断。通常時の5モード、999G天井、ゾーン/モード解析までは複数系統で確認したが、ホール設定変更・純据え置き・電断時の内部契約は直接固定できなかったため推測しない。

## conflicts / safeguards

- 検索上の現行KONAMI機や「戦国コレクション」等のリセット表は別機種のため混入しない。
- 999Gは通常時最大天井。設定変更後専用天井の存在を意味しない。

## sources

取得日: **2026-09-06**

1. コナミアミューズメント公式 機種アーカイブ「喧嘩祭」
   - https://www.konami.com/amusement/psm/archive/ps/2014/kenka/
   - 2014年4月稼働、5号機AT、製品identity。
   - reliability: OFFICIAL
2. 娯楽産業「KPE／KPE・高砂販売 新機種『喧嘩祭』プレス説明会開催」
   - https://www.goraku-sangyo.com/kpe%EF%BC%8Fkpe%E3%83%BB%E9%AB%98%E7%A0%82%E8%B2%A9%E5%A3%B2%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%96%A7%E5%98%A9%E7%A5%AD%E3%80%8D%E3%83%97%E3%83%AC%E3%82%B9%E8%AA%AC%E6%98%8E%E4%BC%9A/
   - 2014-02-18、KPE、高純増アクセルAT第2弾。
   - reliability: INDUSTRY_PERIOD
3. パチビー「喧嘩祭」
   - https://www.pachibee.jp/machines/about/214030001
   - 導入日2014-04-21、KPE、5号機AT、純増3.0枚/G、ボーナス構造。
   - reliability: INDUSTRY_DATABASE
4. pacnk「喧嘩祭」
   - https://pacnk.com/slot/2014/kenkamatsuri/top.php
   - 設定別AT初当たり/CZ/PAYOUT、5モード構造。
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと「喧嘩祭り 天井解析・狙い目・天国示唆高設定確定ハイエナまとめ」
   - https://www.slopachi-quest.com/article/kanka-matsuri/
   - 2014-04-22当時記事、999G天井、モード/ゾーン運用。
   - reliability: ANALYSIS_PERIOD
6. すろぱちくえすと「喧嘩祭 ゾーン狙い解析攻略＠モード・高確率移行率解析」
   - https://www.slopachi-quest.com/article/kenka-zone/
   - 2014-04-27当時記事、モード別ゾーン/高確解析。
   - reliability: ANALYSIS_PERIOD
7. みんスロ「喧嘩祭」
   - https://minslo.com/%E5%96%A7%E5%98%A9%E7%A5%AD/
   - 50枚約27G、999G天井、設定別スペック照合。
   - reliability: RETROSPECTIVE_ANALYSIS_SINGLE
8. 中一商事「KPE 喧嘩祭」
   - https://www.nakaiti.com/html/sKpe080.html
   - 型式名 喧嘩祭KR、5号機AT、神輿ボーナス30G・純増3.0枚/G。
   - reliability: HARDWARE_RETAIL_REFERENCE

## missingFields

- 設定変更時の天井G/モード/状態処理
- 純据え置き時の天井G/モード/状態処理
- 設定変更なし電源OFF→ON時の天井G/モード/状態処理
- 本機固有の変更判別
- 設定変更専用公開朝一数値

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
