# パチスロ花の慶次～武威

No: 1384
machineName: パチスロ花の慶次～武威
machineNameVariants: パチスロ花の慶次 武威 / 花の慶次 武威 / S花の慶次～武威～
manufacturer: EXCITE（エキサイト / ニューギングループ）
releaseDate: 2021-01-12
formalModelName: S花の慶次～武威～EP
certificationNumber: 0S0584

generation: 6号機
systemType: AT / 高純増ストレートAT

## identity / release
- HAZUSE、パチ＆スロ必勝本、1gekiで2021-01-12導入を一致確認。
- HAZUSEで型式 `S花の慶次～武威～EP`、検定番号 `0S0584` を確認。2020-09-10付の業界検定通過記事でも同型式の検定通過を確認。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 98.3% |
| 2 | 99.2% |
| 3 | 100.8% |
| 4 | 107.0% |
| 5 | 110.2% |
| 6 | 112.9% |
- HAZUSE、1geki、パチ＆スロ必勝本で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | 天下無双チャレンジ+AT直撃合算 |
|---:|---:|
| 1 | 1/511 |
| 2 | 1/508 |
| 3 | 1/496 |
| 4 | 1/421 |
| 5 | 1/286 |
| 6 | 1/237 |
- 本機の比較用主要初当たりはCZ「天下無双チャレンジ」+AT直撃の合算。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51.3G/50枚。
- パチ＆スロ必勝本系機種情報、複数攻略資料で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「傾奇Victory」: 約8.7枚/G。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH

## basicPayout
- AT「傾奇Victory」: 武威ストック管理型。通常の赤武威は1ストック10G / 20G / 30G。
- EX虎武威: 最低10G保証後、90～99%継続。
- AT初当たり時は必ず武威ストック特化ゾーン「天武の極」へ。最低4G+α、継続率約75～90%。
- AT中の疑似ボーナス: 20G、純増約8.7枚/G。

## modeSpecificMinimumData
- 通常時モード: 通常A / 通常B / 通常C / 通常D / 天国。
- モード別天井: 通常A 991G / 通常B 991G / 通常C 591G / 通常D 341G / 天国 191G。
- 天井到達時はCZ「天下無双チャレンジ」or AT。870G以降での当選はAT濃厚。
- 有利区間継続時は通常C以上となり、最大591G。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井RESET、有利区間RESET、内部モード再抽選。
- 攻略資料では内部状態もRESET扱い。
- 設定変更後は設定1で通常A 28.1% / 通常B 19.9% / 通常C 21.0% / 通常D 15.7% / 天国15.3%へ振り分け。
- 設定変更時はCZ/AT終了時と同様に20Gの「傾奇ゾーン」へ入る仕様が公開されている。

### carryOverBehavior
- 据え置きでは、設定変更を行わない限り天井進行・有利区間・内部モード/状態をCARRY_OVERする契約として扱う。
- 朝一から有利区間ランプ点灯なら「据え置き+有利区間引き継ぎ濃厚」とする解析がある。
- 前日終了時点が有利区間非継続/通常時ランプ消灯状態なら、朝一消灯だけでは据え置きと設定変更を区別できない。

### powerCycleBehavior
- 純電源OFF→ONでは天井CARRY_OVER、有利区間ランプ状態CARRY_OVER、内部モードCARRY_OVER。
- 複数解析で「設定変更=RESET / 電源OFF→ON=引き継ぎ」を確認。
- 内部状態も電源OFF→ONでは引き継ぎとする解析あり。

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。

### ceilingAfterReset
- 固定の「リセット専用○G天井」はない。
- 設定変更後は再抽選されたモードにより191G / 341G / 591G / 991Gのいずれか。
- 設定1公開値では通常C以上が合計52.0%、通常D以上が31.0%、天国が15.3%。したがって朝一は通常の有利区間リセット時より浅い天井モードが選ばれやすい。

### modeAfterReset
- 設定変更時にモード再抽選。
- 設定1公開値: 通常A 28.1% / 通常B 19.9% / 通常C 21.0% / 通常D 15.7% / 天国15.3%。
- 比較用として、CZ/AT後の有利区間リセット時は通常A 58.2% / 通常B 13.3% / 通常C 12.5% / 通常D 6.3% / 天国9.8%。設定変更後の方が上位モードに優遇される。
- CZ/AT後の有利区間継続時は通常C 68.3% / 通常D 26.7% / 天国5.0%（設定1）。これは朝一専用値ではないため参考分離。

### stateAfterReset
- 設定変更: RESETとする解析あり。
- 純電断: CARRY_OVERとする解析あり。
- 設定変更後の内部状態に関する確率付き初期振り分けは、検索語・資料系統を変えて再探索しても公開固定表を確認できず `NO_PUBLIC_FIXED_STATE_TABLE_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
- 通常時は有利区間ランプが基本消灯だが、有利区間継続時は通常時でも点灯し、次回モード通常C以上の目印になる。

### resetBenefits
- 設定変更後はモード振り分け優遇。設定1で通常C以上52.0%、通常D以上31.0%、天国15.3%。
- 天国なら191G以内、通常Dなら341G以内、通常Cなら591G以内のCZ or AT当選となる。
- 設定変更時に20G継続の「傾奇ゾーン」へ入り、消化中は傾奇玉獲得抽選を行う。
- 大規模実戦集計では朝一初当たりまでの推定機械割101.05%という参考値があるが、純粋な設定変更台だけではなく一部据え置き混入可能性を明記しているため、解析抽選値とは分離して参考値扱い。

### resetPenalties
- 設定変更専用の定量的不利要素は公開確認なし。

### resetDetection
- 通常時は有利区間ランプ基本消灯。
- 朝一から有利区間ランプ点灯なら「据え置き+有利区間引き継ぎ濃厚」。
- 朝一消灯は設定変更でも据え置きでも起こり得るため、消灯単独では変更確定材料にならない。
- 本機固有のガックン発生条件/発生率は `花の慶次 武威 / S花の慶次～武威～EP / EXCITE` と `ガックン / 設定変更 / リセット / 朝一 / 据え置き` を組み替え、攻略サイト・旧DB・回顧資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更時モード振り分け（設定1）:
  - 通常A: 28.1%
  - 通常B: 19.9%
  - 通常C: 21.0%
  - 通常D: 15.7%
  - 天国: 15.3%
- 通常C以上: 52.0%。
- 通常D以上: 31.0%。
- 天国: 15.3%（191G以内のCZ or AT）。
- 固定のリセット短縮天井: なし。モード再抽選による可変天井優遇。
- 朝一実戦統計: 総214万8301G、初当たり1/470.1、平均獲得474.4枚、推定機械割101.05%。ただしリセット率が高い期間の集計で一部据え置き混入可能性があるため `PRACTICAL_REFERENCE_ONLY`。

## resetBehavior 再探索メモ
2026-09-11。`パチスロ花の慶次 武威 / 花の慶次 武威 / S花の慶次～武威～EP / EXCITE / 0S0584` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / モード振り分け / 状態 / 有利区間 / ランプ / ガックン` を組み替え、HAZUSE、1geki、なな徹、ちょんぼりすた、当時攻略資料、旧機種DB、業界検定記事、実戦統計系資料を横断。天井・有利区間・内部モードのRESET/CARRY、設定変更時モード数値、朝一ランプの判別限界まで複数系統で固定。ガックン固有契約と確率付き内部状態初期表は固定できず推測補完しない。

## conflicts
- 明確な性能コア数値CONFLICTは今回確認なし。
- 朝一恩恵について一部初期記事に「天国ならAT確定」とする旧記述があったが、訂正済み資料では「191G以内のCZ or AT」。本レコードは訂正版をcanonicalとする。

## missingFields
- 本機固有ガックン発生条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部状態の確率付き初期振り分け: NO_PUBLIC_FIXED_STATE_TABLE_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://hazuse.com/machine/pachislot/0S0584/ — 型式、検定番号、導入日、設定別初当たり/機械割、天井、設定変更/電断、モード、AT基本性能 / DATABASE_HIGH・ANALYSIS_HIGH
- https://web-greenbelt.jp/post-41020/ — `S花の慶次～武威～EP`検定通過 / INDUSTRY
- https://p.hisshobon.jp/machine/3577/1/79914 — 導入日、設定別初当たり/機械割 / ANALYSIS_HIGH
- https://hisshobon.news/uncategorized/3123/ — 約51.3G/50枚、純増約8.7枚/G、設定別スペック / ANALYSIS_HIGH
- https://1geki.jp/slot/s_keiji_bui/ — 導入日、設定別スペック、AT概要 / ANALYSIS_HIGH
- https://1geki.jp/slot/s_keiji_bui/42/ — モード別天井、設定変更時モード振り分け / ANALYSIS_HIGH
- https://nana-press.com/kaiseki/machine/95/2874/ — モード別天井、有利区間継続 / ANALYSIS_HIGH
- https://nana-press.com/kaiseki/machine/95/2876/ — 設定変更時/有利区間リセット・継続時モード振り分け / ANALYSIS_HIGH
- https://chonborista.com/slot/newgin-slot/121124/ — 設定変更/電源OFF→ONの天井・有利区間・内部状態 / ANALYSIS_HIGH
- https://ichikatsu.com/keijiv/ — 設定変更/電断、モード振り分け、約51.3G/50枚 / ANALYSIS_SINGLE
- https://slotjin.com/zone/keijibui-data/ — 朝一実戦統計、リセット恩恵の実戦参考値 / PRACTICAL_REFERENCE
- https://suropatizamuraibuttagiri.com/2021/01/18/hananokeiji-yuurikukannhikitugi/ — 有利区間ランプ、有利区間継続判別 / ANALYSIS_SINGLE
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/14/at01.php — AT純増、赤武威/EX虎武威基本性能 / ANALYSIS_HIGH
