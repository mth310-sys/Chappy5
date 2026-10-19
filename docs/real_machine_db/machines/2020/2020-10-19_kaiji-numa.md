# 回胴黙示録カイジ～沼～

No: 1372
machineName: 回胴黙示録カイジ～沼～
machineNameVariants: カイジ沼 / 回胴黙示録カイジ沼 / Sカイジ沼KR
manufacturer: 銀座 / サミー
releaseDate: 2020-10-19
formalModelName: Sカイジ沼KR
certificationNumber: 9S1396

generation: 6号機
systemType: AT / CZ経由+AT直撃 / セット数管理 / 4thリール / 有利区間管理

## identity / release
- グリーンべると業界記事でサミー発売・銀座製、10月中旬納品予定を確認。
- パチビー、必勝本、HAZUSE、当時解析で2020-10-19導入が一致。
- HAZUSEで型式 `Sカイジ沼KR`、検定番号 `9S1396` を確認。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.1% |
| 3 | 100.9% |
| 4 | 104.0% |
| 5 | 108.1% |
| 6 | 110.2% |
- 必勝本、ちょんぼりすた、スロットセブン等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
AT「沼BONUS」初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/1189.7 |
| 2 | 1/1138.2 |
| 3 | 1/1077.5 |
| 4 | 1/979.3 |
| 5 | 1/908.6 |
| 6 | 1/893.3 |
- パチビー、必勝本、1geki、複数当時解析で一致。
- CZ「沼攻略戦」初当たりの設定別完全表は公開固定値を確認できず、AT初当たりを主要初当たりとして採用。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51.0G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「沼BONUS」純増 約9.0枚/G。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 沼BONUSは1セット300枚のセット数管理型AT。
- 最大4セットでエンディング、約1200枚。
- エンディング到達率は約70%（設定1）～約88%（設定6）。
- 当時解析の平均AT獲得枚数は設定1約1054.4枚～設定6約1145.4枚。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定G数で主にCZ「沼攻略戦」、特殊モードではAT直撃。
- モード別天井: 通常A 700G+α / 通常B 550G+α / 天国 250G+α / 特殊 750G+α / 続行 200G+α。
- 有利区間開始時は続行以外を抽選。設定1の天国選択率は約25%という当時解析あり。
- 有利区間継続時のみ続行モードへ移行し、256G以内のCZ当選が見込まれる。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井G RESET。
- 内部モード再抽選。
- 非有利区間へ移行し、有利区間ランプ消灯。
- 有利区間再セット時は「遠藤車ステージ」を経由し、モード/規定G等を抽選する。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は天井G CARRY_OVER。
- 内部モード CARRY_OVER。
- 内部状態 / 有利区間 CARRY_OVER。
- 有利区間ランプは前日の有利区間を引き継ぎ、通常時は基本点灯。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみでは、設定変更を伴わない据え置き扱いとして天井G・内部モード・内部状態・有利区間をCARRY_OVERする攻略資料で一致。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 設定変更専用の一律短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間開始時にモードを再抽選し、選択モードの天井が適用される。
- 通常A 700G+α / 通常B 550G+α / 天国 250G+α / 特殊 750G+α。

### modeAfterReset
- 設定変更: 有利区間開始時に通常A/B/天国/特殊から再抽選。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 設定1の有利区間開始時は天国選択率約25%という公開解析あり。
- 全設定の設定変更専用モード振り分け完全表は `PUBLIC_FULL_TABLE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 非有利区間へ移行し再構築。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 有利区間移行時は遠藤車ステージ後に帝愛ステージ（平均400ペリカ）またはZAWA ZAWAステージ（平均800ペリカ）へ移行する公開解析あり。

### advantageousSectionReset
- 設定変更: RESET → 非有利区間。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 通常時は有利区間ランプが基本点灯するタイプ。

### resetBenefits
- 有利区間を新規セットするためモード再抽選を受ける。
- 設定1の天国モード選択率は約25%。天国なら最大250G+αでCZ。
- 有利区間移行時に帝愛/ZAWA ZAWAステージへ移行し、平均400/800ペリカ獲得の公開解析あり。
- 設定変更専用の固定AT保証・固定短縮天井は確認なし。

### resetPenalties
- 据え置きなら保持される天井G・モード・内部進行が設定変更で消去される。
- 設定変更専用の定量的不利は `NONE_DIRECTLY_PUBLISHED`。

### resetDetection
- 通常時から有利区間ランプが基本点灯するため、ホール側対策がない条件では **朝一消灯=設定変更濃厚 / 朝一点灯=据え置き濃厚**。
- ランプ位置は払い出し/WIN表示付近の右下ドットとして公開。
- 本機固有のリールガックン条件/発生率は機種名・型式・メーカー・朝一/設定変更/ガックン等で再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定1・有利区間開始時の天国モード選択率: **約25%**。
- モード別最大天井: **通常A 700G+α / 通常B 550G+α / 天国 250G+α / 特殊 750G+α**。
- 有利区間移行時の特殊ステージ平均ペリカ: **帝愛 約400 / ZAWA ZAWA 約800**。
- 有利区間継続後の続行モード: **200G+α天井**（資料により256G以内CZ表現）。

## resetBehavior 再探索メモ
2026-09-11。`回胴黙示録カイジ～沼～ / カイジ沼 / Sカイジ沼KR / 銀座 / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 遠藤車 / ガックン / 有利区間 / 有利区間ランプ` を組み替え、グリーンべると、パチビー、HAZUSE、必勝本、1geki、ちょんぼりすた、期待値見える化、すろぱちクエスト、スロットセブン、古い解析資料を横断。設定変更/据え置き/電断の天井・モード・有利区間差とランプ判別、公開朝一数値を固定。ガックンのみ直接契約を固定できず推測補完しない。

## conflicts
- releaseDate: 初期・延期前資料には2020-03、2020-09-07等の予定日が残るが、新型コロナ影響で複数回延期。パチビー、必勝本、HAZUSE、当時10月記事、実導入資料が2020-10-19で一致するためcanonicalは2020-10-19。
- manufacturerLabel: 発売元サミー / 製造元銀座。両方を保持。
- 続行モード天井: 一部資料は200G+α、別資料は256G以内CZ確定という表現。定義差（前兆/到達範囲）として平均化しない。

## sources
取得日: 2026-09-11

1. グリーンべると / P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/14326/greenbelt
   - 銀座製、サミー発売、純増9.0枚/G、1セット300枚、最大1200枚を確認。
   - reliability: INDUSTRY
2. パチビー
   - https://www.pachibee.jp/machines/index/220020002
   - 2020-10-19導入、AT初当たり、300枚/セット、純増を照合。
   - reliability: DATABASE_HIGH
3. HAZUSE
   - https://hazuse.com/machine/pachislot/9S1396/
   - 型式 `Sカイジ沼KR`、検定番号 `9S1396`、導入日、純増を確認。
   - reliability: DATABASE_HIGH
4. パチ＆スロ必勝本
   - https://p.hisshobon.jp/machine/3496/1/77019
   - 設定別AT初当たり/機械割、導入日を確認。
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた
   - https://chonborista.com/slot/sammy-slot/106156/
   - ベース、設定別スペック、天井、朝一設定変更/電断、有利区間ランプ、移行時ステージを確認。
   - reliability: ANALYSIS_HIGH
6. 期待値見える化
   - https://slotjin.com/tenjoukitaichi/kaijinuma/
   - 設定変更/据え置き表、モード別天井、有利区間継続、ランプ判別を確認。
   - reliability: ANALYSIS_HIGH
7. 1geki モード/遠藤車
   - https://1geki.jp/slot/s_kaiji_numa/44/
   - https://1geki.jp/slot/s_kaiji_numa/42/
   - モード別天井、有利区間開始時の再抽選、遠藤車ステージを照合。
   - reliability: ANALYSIS_HIGH
