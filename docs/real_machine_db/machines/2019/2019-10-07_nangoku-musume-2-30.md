# パチスロ 南国娘2-30

recordNo: 1309
machineName: パチスロ 南国娘2-30
machineNameVariants: 南国娘2-30 / S南国娘2-30 / 南国娘2 30Φ / 南国娘2 30パイ
manufacturer: アムテックス
formalModel: S南国娘2MA4-30
certificationNumber: 8S1147
releaseDate: 2019-10-07
generation: 6号機
systemType: AT / 疑似ボーナス連荘タイプ / 30Φ

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.7% |
| 2 | 99.8% |
| 5 | 105.9% |
| 6 | 113.0% |

パチマガスロマガ・一撃・P-WORLD機種DB・当時解析で一致。HAZUSEのページ上部レンジも97.7〜113.0%だが、同ページ内の設定別表だけ25Φと同一の97.6/99.5/104.7/109.4%が混入しており、内部矛盾としてCONFLICTに保持する。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ボーナス(AT)初当たり |
|---|---:|
| 1 | 1/398.5 |
| 2 | 1/376.8 |
| 5 | 1/313.3 |
| 6 | 1/245.0 |

HAZUSE・パチマガスロマガ・一撃・P-WORLD機種DBで一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 設定1〜6: 約50.8〜54.0G/50枚（HAZUSE）。
- 当時攻略の概数表記は約51G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナス: 約6.0枚/G。
- ボーナス後のサービスAT「南国タイム」は現状維持型。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout

- BIG CHANCE: 20〜90G、約120〜540枚。
- SPECIAL BIG CHANCE: 90G、約540枚。
- ENDING BONUS: 90G、約540枚。4連目到達時に移行。
- 30Φは獲得枚数重視仕様で、最大約540枚の選択率は約34%とする当時解析あり。
- ボーナス後は80Gまたは150GのサービスAT「南国タイム」。

## modeSpecificMinimumData

- 通常時は小役と規定ゲーム数を契機に8GのCZ「南国チャンス」を経由して疑似ボーナスを目指す。
- 規定ゲーム数による南国チャンス抽選は30G・50G、および100〜600Gの50G刻みで行われる当時解析を確認。
- 30G・50G時の南国チャンス突入率は約0.4%（公開解析）。
- 通常天井は資料競合あり。当時30Φ専用攻略では有利区間移行後660G、HAZUSEでは700G。平均せずCONFLICTとして保持し、30Φ専用の複数整理資料に基づきcanonicalは660Gを採用。
- 完全再現用の詳細テーブル・小役別抽選は収録対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_CONFLICT
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は **天井RESET / テーブルRESET**。
- 有利区間もリセットされるとする30Φ専用解析を確認。

### carryOverBehavior

- 据え置き朝一は **内部天井進捗CARRY_OVER / テーブルCARRY_OVER**。
- リール下の表示G数は据え置きでもリセットされるため、表示値と内部天井進捗を分離する。

### powerCycleBehavior

- 電源OFF→ONのみでは **天井CARRY_OVER / テーブルCARRY_OVER**。
- 30Φ専用解析では有利区間も引き継ぐと整理される。
- リール下の表示G数は電源OFF→ONでリセット。

### gameCounterReset

- 設定変更: 内部天井ゲーム数RESET。
- 据え置き / 電源OFF→ONのみ: 内部天井ゲーム数CARRY_OVER。
- リール下表示G数: 設定変更・据え置き双方でRESET。

### ceilingAfterReset

- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井そのものに資料競合あり: **660G vs 700G**。
  - 30Φ専用の当時攻略: 有利区間移行後660G。
  - HAZUSE: 有利区間移行後700G。
- 25Φが700Gであること、30Φ専用攻略が「25Φより40G浅い」と明示することから、本DBの30Φcanonicalは660G。ただし700G資料を消さずCONFLICT保持。

### modeAfterReset

- 朝一表では設定変更時 **テーブルRESET**、据え置き/純電断は **テーブルCARRY_OVER**。
- 設定変更時の専用テーブル振り分けや朝一専用モードの比較可能な公開数値は `PUBLIC_NUMERIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更で有利区間をリセットする資料を確認。
- CZ潜伏など細部の電断復帰契約は物差し用途を超えるため推測しない。

### advantageousSectionReset

- 設定変更: RESET。
- 電源OFF→ONのみ / 据え置き: CARRY_OVERとする30Φ専用解析あり。
- 一方、当時の朝一解説では通常時有利区間ランプが消灯するため、ランプ単独での変更判別は困難とされる。後年整理サイトにはランプ確認が有効との記述もあり、判別可否はCONFLICTとして扱う。

### resetBenefits

- リセット後の恩恵は **特になし** とする当時30Φ専用攻略を確認。
- 短縮天井・朝一専用高確・専用当選率などは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更専用の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 当時30Φ専用攻略: **ガックン判別不可 / 朝一ガックンなし、通常時有利区間ランプ消灯、リセット判別不可**。
- リール下G数は設定変更・据え置き双方でリセットされるため単独判別不可。
- 後年整理サイトには有利区間ランプ確認が有効との記述があるため、ランプによる判別可否は `CONFLICT`。当時資料を優先し、確定判別手段としては採用しない。

### numericResetData / publicMorningNumbers

- 設定変更後専用のモード振り分け、特定G以内当選率、恩恵発生率など比較可能な確定数値は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。
- 30G/50GのCZ約0.4%は通常時の規定G抽選値であり、リセット専用数値ではない。

### resetBehavior 再探索メモ

「南国娘2-30 / 南国娘2 30Φ / S南国娘2MA4-30 / アムテックス」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / テーブル / モード / 有利区間 / 有利区間ランプ / ガックン / 変更判別」を組み合わせ、当時業界記事、HAZUSE、一撃、パチマガスロマガ、P-WORLD、当時期待値攻略、後年DBを横断。初回検索のみで欠損判定せず再探索した。

## qualityNotes / conflicts

- 25Φ `S南国娘2H2`（平和）と30Φ `S南国娘2MA4-30`（アムテックス）は同時販売だが別型式・別メーカー・別性能。独立レコード化。
- 当時業界記事は25Φ/30Φを同時展開し、30Φを獲得枚数重視、最大約540枚と明記。
- releaseDate: 業界記事の2019-10-06は納品予定日、機種DB/解析は2019-10-07導入開始。DBはホール導入日基準で2019-10-07採用。
- **機械割CONFLICT**: パチマガスロマガ・一撃・P-WORLD・複数解析は97.7/99.8/105.9/113.0%。HAZUSEページ上部も97.7〜113.0%だが設定別表のみ97.6/99.5/104.7/109.4%で25Φ値と一致し、ページ内部矛盾。canonicalは複数一致の30Φ値。
- **天井CONFLICT**: 当時30Φ専用攻略は660G、HAZUSEは700G。canonicalは660G、700Gも根拠付きで保持。
- **変更判別CONFLICT**: 当時攻略は通常時ランプ消灯＋ガックンなしで判別不可。後年整理には有利区間ランプ確認有効との記述があり、確定扱いしない。

## sources

取得日: 2026-09-11

1. P-WORLD / 遊技通信 — 平和のパチスロ南国シリーズ最新作、純増6枚のランクアップ式ボーナス搭載
   - https://news.p-world.co.jp/articles/11606/yugitsushin
   - 2019-08-05。25Φ/30Φ同時展開、30Φ約120〜540枚、純増6枚、納品予定10月6日。
   - reliability: INDUSTRY / CONTEMPORARY
2. PiDEA X — 『S南国娘2 H2 / MA4-30』『Sドラゴンホイール KT』機種評価
   - https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E8%A9%95%E4%BE%A1%E3%80%8Es%E5%8D%97%E5%9B%BD%E5%A8%982-h2-ma4-30%E3%80%8F%E3%80%8Es%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9B%E3%82%A4%E3%83%BC%E3%83%AB-kt%E3%80%8F%E6%A9%9F%E7%A8%AE%E8%A9%95%E4%BE%A1%E5%85%AC%E9%96%8B
   - 2019-07-31。H2（平和）/ MA4-30（アムテックス）、25Φ/30Φ別スペック同時販売を確認。
   - reliability: INDUSTRY / CONTEMPORARY
3. HAZUSE — パチスロ 南国娘2-30
   - https://hazuse.com/machine/pachislot/8S1147/
   - 型式S南国娘2MA4-30、検定番号8S1147、2019-10-07、初当たり、ベース、純増。設定別機械割表と天井値には他資料とのCONFLICTあり。
   - reliability: ANALYSIS_HIGH_WITH_INTERNAL_CONFLICT
4. パチマガスロマガ — 南国娘2-30 ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/02/h.php
   - 初当たり1/398.5〜1/245.0、PAYOUT 97.7〜113.0%を設定別に確認。
   - reliability: ANALYSIS_HIGH
5. 一撃 — S南国娘2-30
   - https://1geki.jp/slot/s_nmusume2_30/
   - 初当たり、出玉率、純増6枚、30Φ最大約540枚・最大枚数選択率約34%を確認。
   - reliability: ANALYSIS_HIGH
6. P-WORLD機種DB — パチスロ 南国娘2-30
   - https://www.p-world.co.jp/machine/database/9013
   - アムテックス、6号機AT、初当たり、機械割、20〜90G/90G、純増6枚を確認。
   - reliability: DATABASE
7. スロパチクエスト — 南国娘2 30パイ 天井解析
   - https://www.slopachi-quest.com/article/nanngokumusume2-30-tennjou/
   - 2019年当時。30Φ天井660G、設定変更時天井/テーブルRESET、電源OFF/ONで引継ぎ、表示G数双方RESET、ガックン不可、恩恵なし、変更判別不可。
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY_STRATEGY
8. パチナビ — S南国娘2-30 天井・ゾーン
   - https://pachinavi.net/machines/nangoku-musume-2-30/tenjo/
   - 660G天井、設定変更で天井/有利区間RESET、純電断引継ぎを確認。一方ランプ判別記述は当時攻略と競合。
   - reliability: ANALYSIS_SECONDARY / RETROSPECTIVE
9. ぱちんこスロット新台解析 — S南国娘2-30
   - https://www.pachinow.jp/s5/nangokumusume230-index.php
   - 2019-10-07予定、アムテックス、AT純増約6枚、機械割97.7/99.8/105.9/113.0%。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時のテーブル振り分け公開数値
- リセット後特定G以内当選率等の朝一専用数値
- メーカー一次のガックン発生条件

## conflicts

- payoutRateBySetting: 97.7/99.8/105.9/113.0%（複数一致） vs HAZUSE設定別表97.6/99.5/104.7/109.4%（25Φ値と一致する内部混入疑い）。平均せず前者をcanonical。
- ceiling: 660G（30Φ専用当時攻略・後年整理） vs 700G（HAZUSE）。平均せず660Gをcanonical、700Gも保持。
- resetDetection: 当時攻略は「判別不可」、後年整理は有利区間ランプ確認有効。確定材料には採用せずCONFLICT保持。

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_CONFLICT
