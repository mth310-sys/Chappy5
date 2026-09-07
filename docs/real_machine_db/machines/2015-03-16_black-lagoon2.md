# BLACK LAGOON2

machineName: BLACK LAGOON2
manufacturer: スパイキー
releaseDate: 2015-03-16
releaseDatePrecision: exact_hall_start
releaseDateNote: グリーンべるとが2015年1月20日時点で「3月中旬から納品開始予定」と報道し、複数機種DBが2015-03-16導入としているためホール導入開始を2015-03-16とする。P-WORLDには旧販売計画由来とみられる2014-09表記が残るため競合履歴として保持。
generation: 5号機
systemType: A+ART / ボーナス+ART / CZ搭載
modelName: ブラックラグーン2CC
inspectionNumber: 4S0542
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- メーカー: **スパイキー**。
- 型式名: **ブラックラグーン2CC**。
- 検定番号: **4S0542**。
- P-WORLDで型式名・検定番号を確認。
- 2014年9月の発売予定から延期され、グリーンべるとが2015-01-20に3月中旬納品開始予定を報道。複数機種別資料が2015-03-16導入で一致するためcanonicalは2015-03-16。

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.7% |
| 3 | 100.7% |
| 4 | 104.8% |
| 5 | 108.0% |
| 6 | 112.1% |

- pachinavi、pacnk、2-9伝説で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG合成 | REG | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/385.5 | 1/555.4 | 1/227.6 | 1/596.0 |
| 2 | 1/376.6 | 1/537.2 | 1/221.4 | 1/553.3 |
| 3 | 1/368.2 | 1/520.1 | 1/215.6 | 1/531.3 |
| 4 | 1/360.1 | 1/504.1 | 1/210.1 | 1/477.0 |
| 5 | 1/352.3 | 1/461.5 | 1/199.8 | 1/437.5 |
| 6 | 1/344.9 | 1/448.9 | 1/195.1 | 1/370.1 |

- P-WORLD、pachinavi、pacnk、2-9伝説で主要値を照合。
- SUPER BIGはBIG合成内の一部（別途1/16384とする後年資料あり）で、物差し用途ではBIG合成を採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- `BLACK LAGOON2 / ブラックラグーン2 / ブラクラ2 / ブラックラグーン2CC` と `50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数` を組み替え、P-WORLD・K-Navi・必勝本・pachinavi・pacnk・2-9伝説・CrankySeven・中古実機資料・後年回顧資料を横断したが、本機固有の比較可能な直接値を安全に固定できなかった。
- 後継BLACK LAGOON3/4/ZEROのベース値は転記しない。

## netIncrease

- ART「LAGOON RUSH」: **約1.6枚/G**。
- グリーンべると、P-WORLD、K-Navi、サミーネットワークスで一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- SUPER BIG BONUS: **約150枚**。
- BIG BONUS: **約150枚**。
- REG BONUS: **約50枚**。
- ART「LAGOON RUSH」: **1セット50G+α**、純増約1.6枚/G。
- CZ「Bullet BATTLE」: **15G+α**、ART期待度約40%。
- P-WORLD、K-Navi、グリーンべるとで主要仕様を照合。

## modeSpecificMinimumData

- 通常天井: **ボーナス間1280G**。
- ART当選を挟んでもボーナス間天井Gはリセットされない。
- 天井到達時は **次回ボーナスまで継続するART + Bullet MAX（バレット10発）**。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **ボーナス間1280G天井のゲーム数をクリア**。
- 必勝本解析では、Bullet BATTLEの内部ランクは **ART終了時・BB失敗時・設定変更時**に移行抽選が行われるため、設定変更でBBランクを再抽選することを直接確認。
- 設定変更時の通常時低確/高確/超高確の初期振り分けについて、本機固有の直接数値は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- ART当選だけではボーナス間1280G天井Gがリセットされないことは複数資料で確認。
- ただし前日→翌日の**純据え置き跨ぎ**でボーナス間G・通常時内部状態・BBランク・バレット関連状態をどこまで保持するかを直接明記した本機固有資料は、検索語と資料系統を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機慣例から推定しない。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ONについて、ボーナス間天井G、通常時内部状態、BBランク、ステージ/表示の本機固有契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- BLACK LAGOON3/4/ZEROの電断・有利区間情報は別機種として除外。

### gameCounterReset

- 設定変更時: **RESET**（ボーナス間1280G天井進捗をクリア）。
- ART当選のみ: **CARRY_WITHIN_SAME_POWER_SESSION**（ボーナス間天井は継続）。
- 据え置き跨ぎ / 純電断: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更後も天井は **1280G**。短縮天井の公開契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット専用の100G/500G等の短縮振り分けは確認されていない。

### modeAfterReset

- 規定G数モード式の天井ではない。
- Bullet BATTLE内部ランクは設定変更時に移行抽選されることを確認。
- 朝一専用モード / リセット専用通常モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 通常時には低確/高確/超高確等の状態が存在する。
- 設定変更時の初期状態振り分け・固定状態については `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更後の**天井短縮**は `NONE_CONFIRMED_AFTER_RESEARCH`。
- BBランク再抽選は確認できるが、朝一客AIで比較可能な設定変更専用優遇率として安全に固定できる公開数値は今回なし。
- `NONE_CONFIRMED_AFTER_RESEARCH`（主要朝一恩恵）。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、初期出目、液晶/ランプ、朝一ステージ等による設定変更/据え置き判別契約は `UNVERIFIED_AFTER_RESEARCH`。
- `ブラックラグーン2 / BLACK LAGOON2 / ブラクラ2 / ブラックラグーン2CC / スパイキー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 変更判別` を組み替えて再探索したが直接資料を固定できなかった。
- BLACK LAGOON3のRT状態・下パネル、4/ZEROの有利区間ランプは別機種のため転記しない。

### numericResetData

- 設定変更時1280G天井: **ゲーム数リセット、短縮なし確認範囲**。
- Bullet BATTLEランク: **設定変更時に移行抽選あり**。今回、設定変更時専用のランク1〜6振り分け数値は直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- 比較可能な設定変更専用の朝一当選率・短縮天井率・モード振り分け数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- **導入時期**: P-WORLDは型式データ欄に **2014-09** を残している。一方、グリーンべるとは2015-01-20に「販売を延期していた」本機の販売開始と **2015年3月中旬から納品開始予定**を報道し、pachinavi・2-9伝説等は **2015-03-16**導入。旧販売計画と延期後実導入の差と判断し、canonicalは2015-03-16、P-WORLDの2014-09は履歴競合として保持。
- パチ7の一部ページにも **2014-10-06** 表記が残るが、延期前データの可能性が高く、2015年3月の業界一次報道と整合しないためcanonicalへ採用しない。

## missingFields

- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior exact overnight contract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- stateAfterReset exact initial distribution: `UNVERIFIED_AFTER_RESEARCH`
- resetDetection gakkun/display/stage: `UNVERIFIED_AFTER_RESEARCH`
- setting-change BB-rank numeric distribution: `UNVERIFIED_AFTER_RESEARCH`

## sources

取得日: 2026-09-07

1. グリーンべると「『BLACK LAGOON2』の3月納品が決定」— https://web-greenbelt.jp/00007515/
   - 2015-01-20記事。販売延期後、3月中旬から納品開始予定、A+ART、ART50G+α・純増約1.6枚/G、Bullet BATTLE約40%。
2. P-WORLD「BLACK LAGOON2」— https://www.p-world.co.jp/machine/database/7498
   - メーカー、5号機A+ART、型式ブラックラグーン2CC、検定4S0542、BIG/REG/ART確率、約150/50枚、ART50G+α・1.6枚/G。旧2014-09表記も競合履歴として保持。
3. pachinavi「パチスロ ブラックラグーン2」— https://pachinavi.net/machines/black-lagoon-2/
   - 2015-03-16導入、機械割、BIG/REG/ART初当たり。
4. K-Navi「BLACK LAGOON2」— https://p-kn.com/slot/2118/
   - ボーナス基本獲得枚数、ART/CZ構成、純増・基本ゲーム数。
5. パチ＆スロ必勝本「ART抽選 [ブラックラグーン2]」— https://p.hisshobon.jp/machine/2546/1/51940
   - Bullet BATTLE内部ランク、ART終了時・BB失敗時・設定変更時のランク移行抽選。
6. CrankySeven「ブラックラグーン2」— https://crankyseven.com/blacklagoon-two-pc.htm
   - ボーナス間1280G天井、次回ボーナスまでART+Bullet MAX、設定変更で天井Gクリア、通常時状態。
7. 2-9伝説「ブラックラグーン2」— https://29den.com/blacklagoon2/
   - 2015-03-16導入、1280G天井、設定変更で天井G数リセット、機械割・ボーナス合算。
8. サミーネットワークス「BLACK LAGOON2」— https://www.sammy-net.jp/news/2015/11/black-lagoon2777townnet.html
   - 2015年ホール導入機であること、A+ART継承、ART純増1.6枚/G・50G+α。
9. pacnk「BLACK LAGOON2 設定判別ツール」— https://pacnk.com/slot/tools/sh_blacklagoon2.html
   - 機械割、BIG/REG/ART初当たりの照合。
10. すろぱちくえすと「ブラックラグーン2 天井」— https://www.slopachi-quest.com/article/blacklagoon2/
   - ボーナス間1280G、ARTで天井G非リセット、天井恩恵の照合。

## confidenceSummary

- identity / model / inspection: ANALYSIS_HIGH
- releaseDate canonical: INDUSTRY_PLUS_ANALYSIS_HIGH
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- netIncrease / basicPayout: INDUSTRY_PLUS_ANALYSIS_HIGH
- setting-change ceiling reset: ANALYSIS_HIGH_MULTI_SOURCE
- setting-change BB-rank reselection: ANALYSIS_HIGH
- carryOver / powerCycle / resetDetection detail: UNVERIFIED_AFTER_RESEARCH
