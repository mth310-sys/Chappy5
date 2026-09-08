machineName: ニューペガサスR
manufacturer: エマ
releaseDate: 2016-12-12
recordNumber: 1027
generation: 5号機 / 5.5号機期
systemType: ノーマルタイプ / 完全告知 / 技術介入
formalModelName: ペガサスR
certificationNumber: 6S1222
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_NO_COMPLEX_RESET_SYSTEM

## identity
- パチビーおよびHAZUSEで導入開始日2016-12-12、メーカー「エマ」が一致。
- HAZUSEで型式名「ペガサスR」、検定番号「6S1222」を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 103.0% |
| 5 | 105.0% |
| 6 | 108.0% |

- HAZUSE、P-WORLD、後年設定判別DBで同系列を照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/239.2 | 1/481.9 | 1/159.8 |
| 2 | 1/237.4 | 1/409.6 | 1/150.3 |
| 3 | 1/235.7 | 1/360.1 | 1/142.5 |
| 4 | 1/234.1 | 1/318.1 | 1/134.8 |
| 5 | 1/232.4 | 1/287.4 | 1/128.5 |
| 6 | 1/230.8 | 1/260.1 | 1/122.3 |

- HAZUSEとP-WORLDで一致。pacnkの設定判別DBでも同値を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定1〜6: **約31.5G〜32.5G/50枚**。
- HAZUSEの設定差を含む公開レンジを採用。
reliability: ANALYSIS_HIGH

## netIncrease
- ノーマルタイプでAT/ART/RTによる純増概念は `NOT_APPLICABLE_NORMAL_TYPE`。

## basicPayout
- BIG BONUS: 最大311枚。
- REG BONUS: 最大111枚。
- BIGは345枚超払い出しで終了、REGは105枚超払い出しで終了。
- P-WORLDとHAZUSEで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナスのみで出玉を増やす完全告知ノーマルタイプ。
- 天井機能非搭載。
- AT / ART / CZ / RTおよび通常時の長期モードは非搭載または確認なし。
- ボーナス中の逆押し1回で最大獲得枚数を狙う技術介入仕様。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCH_NO_COMPLEX_RESET_SYSTEM
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ゲーム数天井、AT/ART/CZ、朝一専用長期モードを持たないノーマルタイプのため、それらの設定変更リセット契約は `NOT_APPLICABLE`。
- 設定変更時のみ発生するボーナス当選優遇、朝一高確、短縮天井等は、機種名・型式名・メーカー名に「設定変更」「リセット」「朝一」を組み合わせ、HAZUSE/P-WORLD/解析DB/検索資料を再探索しても `NONE_CONFIRMED_AFTER_RESEARCH`。

### carryOverBehavior
- 天井・ART/CZ・長期モードが存在しないため、翌日に引き継ぐゲーム数天井/モードは `NOT_APPLICABLE_NO_CEILING_OR_LONG_TERM_MODE`。
- ボーナス成立中など完全再現用の一時内部フラグ挙動は本DBの収集粒度外。

### powerCycleBehavior
- 天井・ART/CZ・長期モードがないため、純電源OFF→ONで比較対象となる長期ゲーム数/モードは `NOT_APPLICABLE_NO_CEILING_OR_LONG_TERM_MODE`。
- 本機固有の電源OFF→ONのみで生じる朝一恩恵/不利は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- 設定変更専用短縮天井もN/A。

### modeAfterReset
- 通常/天国等の長期モード、朝一専用モードは `NOT_APPLICABLE_OR_NONE_CONFIRMED`。

### stateAfterReset
- AT/ART/CZ用の低確/高確等、朝一稼働に影響する内部状態は `NOT_APPLICABLE_OR_NONE_CONFIRMED`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 短縮天井、朝一高確、CZ/ART優遇、設定変更専用当選率等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開された不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、ランプ状態などによる設定変更/据え置き判別は、「ニューペガサスR」「ペガサスR」「エマ」に「ガックン」「設定変更」「据え置き」「朝一」を組み合わせ再探索したが、直接資料を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス中のペガサスランプ色は現在設定の示唆であり、設定変更/据え置き判別とは別用途なのでresetDetectionには採用しない。

### numericResetData
- 設定変更時専用のモード振り分け、朝一当選率、短縮天井、リセット恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- 性能コアはHAZUSEとP-WORLDでBIG/REG/合算/機械割/基本獲得枚数が一致し、後年設定判別DBも同系列。
- 50枚ベースはHAZUSEの約31.5〜32.5G/50枚を採用。
- resetBehaviorは、天井・AT/ART/CZ・長期モードを持たないノーマルタイプとしてN/Aを明示。一般論からガックンや電断挙動を推定していない。
- 公開されたボーナス中ペガサスランプ色振り分けは設定示唆であり、v0.7の朝一リセット数値には混入させない。

## conflicts
- NONE_CONFIRMED_AFTER_RESEARCH

## missingFields
- 本機固有の設定変更/据え置き判別手段: NONE_CONFIRMED_AFTER_RESEARCH
- 本機固有の純電源OFF→ON時のみの特殊挙動: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. パチビー — ニューペガサスR
   - https://www.pachibee.jp/movies/index/13138
2. HAZUSE — ニューペガサスR 基本/天井/設定判別
   - https://hazuse.com/machine/pachislot/6S1222/
3. HAZUSE — ニューペガサスR 基本スペック
   - https://hazuse.com/machine/pachislot/6S1222/genre/201/
4. P-WORLD — ニューペガサスR
   - https://www.p-world.co.jp/machine/database/8243
5. pacnk — ニューペガサスR 設定判別ツール
   - https://pacnk.com/slot/tools/sh_newpegasasur.html
6. ALL7 — 2016年12月導入予定一覧
   - https://www.all7.jp/plans/index/2016/12
7. HAZUSE — パチンコ・パチスロ新台カレンダー
   - https://hazuse.com/new-machine-calendar/newmachine-calendar/
