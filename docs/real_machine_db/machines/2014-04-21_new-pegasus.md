# ニューペガサス

machineName: ニューペガサス
formalModelName: ニューペガサス
manufacturer: エマ
releaseDate: 2014-04-21
releaseDatePrecision: exact_hall_start
generation: 5号機
systemType: ノーマル / 完全告知 / BIG+REG
recordStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT_AND_RESET_BEHAVIOR_V0_7_PARTIAL

## identity

- K-NaviおよびHAZUSEでホール導入開始 **2014-04-21** を確認。
- HAZUSEで型式名 **ニューペガサス**、検定番号 **3S1253** を確認。
- 2014-03-11の娯楽産業記事で、エマ製・ペガサスジャパン販売の新機種として発表されたことを確認。
- confidence: INDUSTRY + ANALYSIS_HIGH_EXACT_DATE

## payoutRateBySetting

### source family A

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 103.0% |
| 5 | 105.0% |
| 6 | 108.0% |

- 2-9伝説の後年解析整理値。
- pacnkは設定1のみ98%表記で、設定2〜6は 98/100/103/105/108%。

### source family B

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.5% |
| 3 | 101.2% |
| 4 | 103.0% |
| 5 | 104.7% |
| 6 | 106.5% |

- けんのスロットシミュレーション掲載値。

- 設定4は一致するが、特に設定1/2/3/5/6で単なる丸めでは説明できない差があるため平均せず **CONFLICT_PAYOUT_RATE** として双方を保持する。
- confidence: CONFLICT / ANALYSIS_SINGLE_MULTI_FAMILY

## initialHitBySetting

### BIG

| 設定 | BIG |
|---:|---:|
| 1 | 1/239.18 |
| 2 | 1/237.45 |
| 3 | 1/235.74 |
| 4 | 1/234.06 |
| 5 | 1/232.40 |
| 6 | 1/230.76 |

### REG

| 設定 | REG |
|---:|---:|
| 1 | 1/481.88 |
| 2 | 1/409.60 |
| 3 | 1/360.09 |
| 4 | 1/318.14 |
| 5 | 1/287.44 |
| 6 | 1/260.06 |

### ボーナス合算

| 設定 | 合算 |
|---:|---:|
| 1 | 1/159.84 |
| 2 | 1/150.31 |
| 3 | 1/142.47 |
| 4 | 1/134.85 |
| 5 | 1/128.50 |
| 6 | 1/122.27 |

- HAZUSEの精密値を主採用。
- pacnk、中古実機資料、けんのスロットシミュレーションでも丸め値が一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

けんのスロットシミュレーション掲載値:

| 設定 | 50枚あたり |
|---:|---:|
| 1 | 31.51G |
| 2 | 31.70G |
| 3 | 31.90G |
| 4 | 32.10G |
| 5 | 32.30G |
| 6 | 32.51G |

- 他系統で完全照合できていないため単一解析資料値として保持。
- confidence: ANALYSIS_SINGLE

## netIncrease

- 非該当。AT/ART/RTで継続純増する機種ではない。

## basicPayout

- BIG: **約311枚**。
- REG: **約111枚**。
- K-Naviの規定払い出しはBIG 345枚以上、REG 105枚以上で終了。
- 娯楽産業の2014年発表記事もBB約311枚 / RB約111枚と説明。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やす5号機ノーマルタイプ。
- ボーナス成立時は必ず告知。盤面左下の「LUCKY!」点灯が基本告知。
- 設定1でもBIG約1/239とBIGを軽めに設計した系列。
- 通常時のゲーム数解除モード、AT/ART/CZ、ゲーム数天井は確認されない。

## ceiling

- **天井非搭載**。
- 2-9伝説およびけんのスロットシミュレーションで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_NO_PERSISTENT_CEILING_OR_MODE_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 本機固有の設定変更時RAM処理、ボーナス内部成立状態、告知状態等を直接説明する高信頼公開資料は、検索語・資料系統変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なノーマル機の挙動から推測して補完しない。

### carryOverBehavior

- 据え置き時に引き継ぐべきゲーム数天井・AT/ART/CZモードは **NOT_APPLICABLE_CONFIRMED**。
- 本機固有のその他内部状態の据え置き契約は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ON時の本機固有RAM/告知状態処理は **UNVERIFIED_AFTER_RESEARCH**。
- 天井・AT/ART/CZモードについては非搭載のため引継ぎ比較対象なし。

### gameCounterReset

- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井も **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- ゲーム数解除モード / AT / ART / CZモードは **NOT_APPLICABLE**。
- 設定変更専用の朝一モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- ホール朝一狙いに影響する本機固有の内部高確/状態再抽選は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ボーナス内部成立等の低レベルRAM契約は物差し用途外かつ直接資料未取得のため推測しない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時専用の天井短縮、朝一CZ、モード優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日ハマリによる天井進捗が存在しないため、天井Gクリア由来の朝一不利は **NOT_APPLICABLE**。
- その他の設定変更専用不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期ランプ/出目等による設定変更・据え置き判別を高信頼資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- 設定変更時専用の比較可能な公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

「ニューペガサス / ニューペガサス 3S1253 / エマ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / 変更判別」を組み合わせ、K-Navi、HAZUSE、pacnk、2-9伝説、けんのスロットシミュレーション、当時業界記事、実機流通資料を横断。ゲーム数天井非搭載、AT/ART/CZモード非該当までは複数資料で固定できたが、本機固有の設定変更・据え置き・電断時RAM契約および変更判別は固定できなかった。2016年「ニューペガサスR」、2010年前後の「ニューペガサスブラック」等の別仕様情報は混入させていない。

## conflicts / safeguards

- 機械割は資料系列で **96/98/100/103/105/108%**、pacnk **98/98/100/103/105/108%**、けんのスロットシミュレーション **97.6/99.5/101.2/103.0/104.7/106.5%** が競合。平均せず保持。
- 2016年導入「ニューペガサスR」、旧「ニューペガサス/ブラック」系列の設定変更・機械割・示唆情報を2014年3S1253へ転記しない。

## sources

取得日: 2026-09-06

1. HAZUSE — ニューペガサス
   - https://hazuse.com/machine/pachislot/3S1253/
   - 型式、検定番号3S1253、導入2014-04-21、設定別BIG/REG/合算
   - reliability: ANALYSIS_HIGH
2. K-Navi — ニューペガサス
   - https://p-kn.com/slot/2037/
   - 導入2014-04-21、ノーマル完全告知、規定払い出し
   - reliability: ANALYSIS_HIGH
3. K-Navi — 2014年4月新台導入カレンダー
   - https://p-kn.com/calendar/201404/
   - 04-21同日群確認
   - reliability: ANALYSIS_HIGH_EXACT_DATE
4. 娯楽産業 — エマ／ペガサスジャパン 新機種「ニューペガサス」発表（2014-03-11）
   - https://www.goraku-sangyo.com/%E3%82%A8%E3%83%9E%EF%BC%8F%E3%83%9A%E3%82%AC%E3%82%B5%E3%82%B9%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%9A%E3%82%AC%E3%82%B5/
   - エマ製、Aタイプ、BB約311枚/RB約111枚、全設定BIG1/240超
   - reliability: INDUSTRY
5. pacnk — ニューペガサス
   - https://pacnk.com/slot/2010/pegasusw/top.php
   - BIG/REG、PAYOUT 98/98/100/103/105/108%、約311/111枚
   - reliability: ANALYSIS_SINGLE
6. けんのスロットシミュレーション — ニューペガサス解析情報
   - https://kenslo65536.com/kaiseki/new-pegasus.html
   - 出玉率97.6〜106.5%、50枚31.51〜32.51G、ボーナス、天井なし
   - reliability: ANALYSIS_SINGLE
7. 2-9伝説 — ニューペガサス
   - https://29den.com/newpegasus/
   - 天井非搭載、機械割96/98/100/103/105/108%、合算
   - reliability: ANALYSIS_SINGLE
8. 中一商事 — エマ ニューペガサス中古実機
   - https://www.nakaiti.com/html/Ema001.html
   - 型式名、ノーマルA、設定別BIG/REG/合算
   - reliability: RETAIL_HARDWARE_REFERENCE

## missingFields

- 本機固有の設定変更/据え置き/電源OFF→ON時RAM契約
- 本機固有のresetDetection（ガックン等）
- 機械割の競合解消に足る一次/高信頼設定別表

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- CONFLICT_PAYOUT_RATE: source family A/B/cross-source discrepancy as described above.