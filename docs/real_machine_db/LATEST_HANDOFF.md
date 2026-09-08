更新日: 2026-09-08

## 現在地点
- recordCount: **1033**
- latestRecordAdded: **パチスロ ロリポップチェーンソー**（藤商事）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-12-19_lollipop-chainsaw.md`
- chronologicalFrontier: **2016-12-19**
- frontierLatestMachine: **パチスロ ロリポップチェーンソー — No.1033**
- schema: **resetBehavior v0.7**
- status: **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1032実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約なので、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- main正本は **1032件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN** まで先行していたため、過去チャットの古い再開地点には戻らずhandOffを優先。
- handoff指定の次未処理、藤商事 `パチスロ ロリポップチェーンソー` をNo.1033として追加。
- 性能コアは藤商事公式をcanonicalとし、設定別出玉率・ART初当りを公式値で固定。
- resetBehavior v0.7は設定変更 / 据え置き / 純電源OFF→ONを分離し、モード・状態の公開朝一振り分けを収録。
- 12/19群はまだOPEN。次未処理はロデオ `パチスロ犬夜叉`。

## No.1033 — パチスロ ロリポップチェーンソー
- manufacturer: **藤商事**
- releaseDate canonical: **2016-12-19**
- formalModelName: **ロリポップチェーンソーFSB**
- certificationNumber: **6S0963**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ / ゲーム数モード**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割/出玉率（藤商事公式）: **97.69 / 98.78 / 100.46 / 103.89 / 107.14 / 111.88%**。
- ART初当り（藤商事公式）: **1/412.18 / 395.30 / 375.45 / 328.15 / 297.66 / 263.78**。
- STAR SOUL BONUS: **全設定共通1/1310.7**。
- baseGamesPer50: **約40〜41.5G/50枚**。別系統資料の約41G表記とも整合。
- ART `JULIET RUSH`: **約2.0枚/G**、固定継続G数型ではなくロリポップ保持中継続。
- STAR SOUL BONUS: **302枚超払い出しで終了 / 純増約204枚**。

### ceiling / mode
- 通常A: 最大 **1200G**。
- 通常B: 最大 **800G**。
- 天国: 最大 **100G**。
- 天井到達でART当選濃厚。
- 通常時内部状態は通常 / 高確 / 超高確。

### resetBehavior v0.7
- settingChangeBehavior: **天井ゲーム数RESET / 内部モードRESELECT / 内部状態RESELECT**。
- carryOverBehavior: **天井・内部モード・内部状態 CARRYOVER_SUPPORTED**。
- powerCycleBehavior: **純電源OFF→ONは天井・内部モード・内部状態 CARRYOVER_SUPPORTED**。
- gameCounterReset: 設定変更RESET、据え置き/純電断CARRYOVER。
- ceilingAfterReset: 固定短縮天井は確認なし。ただし再抽選モードが天国なら最大100G、通常Bなら800G、通常Aなら1200G。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一ステージは設定変更 / 電源OFF→ONとも学校ステージで、ステージ単独判別不可。
- ガックン検証では明瞭なブレを確認できず、確定判別要素として採用しない。

### public reset numeric data
#### 設定変更時モード振り分け
| 設定 | 通常A | 通常B | 天国 |
|---:|---:|---:|---:|
| 1 | 59.84% | 20.08% | 20.08% |
| 2 | 49.61% | 30.31% | 20.08% |
| 3 | 54.72% | 20.08% | 25.20% |
| 4 | 44.49% | 30.31% | 25.20% |
| 5 | 49.61% | 20.08% | 30.31% |
| 6 | 32.28% | 32.68% | 35.04% |

#### 設定変更時内部状態
| 設定 | 通常 | 高確 | 超高確 | 高確以上合計 |
|---:|---:|---:|---:|---:|
| 1 | 59.84% | 35.04% | 5.12% | 40.16% |
| 2 | 72.44% | 25.20% | 2.36% | 27.56% |
| 3 | 59.84% | 35.04% | 5.12% | 40.16% |
| 4 | 72.44% | 25.20% | 2.36% | 27.56% |
| 5 | 54.72% | 35.04% | 10.24% | 45.28% |
| 6 | 40.94% | 43.70% | 15.35% | 59.05% |

- 高確以上合計は公開値の単純合算であり独立解析値ではない。
- 朝一100G以内の**実ART当選率**は直接公開値を固定できず `UNVERIFIED_AFTER_RESEARCH`。天国振り分けをそのまま実当選率として流用しない。

## identity / quality
- 藤商事公式製品ページが現存し、設定別出玉率・ART初当りを直接掲載。
- HAZUSEで型式 **ロリポップチェーンソーFSB**、検定番号 **6S0963**、導入開始 **2016-12-19** を確認。
- PiDEA X / グリーンべるとの2016-10業界発表で藤商事のA+ART、ART純増約2.0枚、ボーナス約200枚を確認。
- releaseDateは2016-12-19が複数一致。一方、単一攻略資料に2016-12-12表記があるため `CONFLICT_RELEASE_DATE_2016_12_19_VS_2016_12_12` とし平均しない。
- HAZUSEの一箇所で1/412.2〜1/263.8を「ボーナス＋ART合成」とする見出しがあるが、藤商事公式・他解析では同系列はART初当り。数値競合ではなく定義ラベル問題として公式定義をcanonical採用。

## 2016-12-19群 — OPEN
登録済み:
- **SHAKE III（シェイク3）**（大都技研）— No.1029
- **スーパービンゴ リゾート**（ベルコ）— No.1030
- **パチスロニュースモモチャンEX**（ニューギン / 25Φ）— No.1031
- **パチスロニュースモモチャンEX-30**（ニューギン / 30Φ）— No.1032
- **パチスロ ロリポップチェーンソー**（藤商事）— No.1033

未処理先行候補:
1. **パチスロ犬夜叉**（ロデオ）
2. **麻雀格闘倶楽部2**（KPE）

先行確認:
- ALL7、K-Navi等で `パチスロ犬夜叉` は **2016-12-19**導入を確認。次回、メーカー/HAZUSE/P-WORLD/当時業界資料で型式・検定番号・性能コア・resetBehavior v0.7を再固定してNo.1034候補とする。
- HAZUSEで `麻雀格闘倶楽部2` は **2016-12-19**、型式 **麻雀格闘倶楽部2／KA**、検定番号 **6S0920** を先行確認。犬夜叉処理後の次候補。

## 境界監査
- **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- chronologicalFrontierは **2016-12-19**、同日群はOPEN。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1033を再取得。
2. **1033件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN** を正本として継続。
3. 次未処理の **ロデオ `パチスロ犬夜叉`** をNo.1034候補として処理。導入日・正式型式・検定番号・重複を再確認する。
4. その後 **麻雀格闘倶楽部2** を処理し、12/19同日全メーカー監査を継続する。
5. 各機種で性能コアに加え、設定変更/据え置き/純電源OFF→ON、ゲーム数/CZ/周期/ポイント、モード/状態、朝一恩恵/不利、変更判別、公開リセット数値を検索語・資料系統変更で徹底調査する。
6. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1033 ロリポップチェーンソー
- 藤商事公式: https://www.fujimarukun.co.jp/products/lolipop/
- 藤商事公式遊技小冊子: https://www.fujimarukun.co.jp/products/open_book/lolipop/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0963/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/6S0963/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/27306/
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/lollipop-reset/
- すろぱちくえすと ceiling: https://www.slopachi-quest.com/article/lollopop/
- P-WORLD: https://www.p-world.co.jp/machine/database/8192
- PiDEA X: https://www.pidea.jp/articles/%E3%83%99%E3%83%AB%E3%81%8C%E3%83%81%E3%83%A3%E3%83%B3%E3%82%B9%E3%81%AE%E3%80%8C%E3%83%AD%E3%83%AA%E3%83%9D%E3%83%83%E3%83%97%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%82%BD%E3%83%BC%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E8%97%A4%E5%95%86%E4%BA%8B
- グリーンべると: https://web-greenbelt.jp/00009008/
- スロットガーデン（releaseDate alternate）: https://xn--mckza4ard4ttb2d.com/lolipop

### 12/19群 / 次候補
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
- K-Navi 犬夜叉: https://p-kn.com/slot/2643/
- HAZUSE 麻雀格闘倶楽部2: https://hazuse.com/machine/pachislot/6S0920/
