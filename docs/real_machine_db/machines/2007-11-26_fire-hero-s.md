# ファイアーヒーローS

machineName: ファイアーヒーローS
manufacturer: アトム
generation: 5号機
releaseDate: 2007-11-26
systemType: ボーナス + CZ + RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## release / identity

- パチビー導入カレンダーで2007-11-26導入。
- P-WORLDでアトム、5号機RT、2007年11月導入を確認。
- 検定通過整理資料では2007-10-15に「ファイアーヒーロー S（回胴）」通過。
- 後継の「ファイアーヒーローII（2008）」とは別機種として分離。

信頼度: ANALYSIS_HIGH

## payoutRateBySetting

### パチマガスロマガ・シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 98.16% |
| 2 | 99.15% |
| 3 | 100.12% |
| 4 | 101.14% |
| 5 | 102.10% |
| 6 | 103.08% |

### 後年スペック整理値

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.22% |
| 2 | 98.69% |
| 3 | 100.67% |
| 4 | 102.19% |
| 5 | 104.33% |
| 6 | 106.65% |

単純な丸め差ではなく高設定ほど差が拡大するため平均せず `CONFLICT`。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ解析値:

| 設定 | BIG合成 | REG | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/1092.27 | 1/262.14 | 1/211.41 |
| 2 | 1/1024.00 | 1/252.06 | 1/202.27 |
| 3 | 1/963.76 | 1/242.73 | 1/193.89 |
| 4 | 1/910.22 | 1/234.06 | 1/186.18 |
| 5 | 1/862.32 | 1/225.99 | 1/179.06 |
| 6 | 1/819.20 | 1/218.45 | 1/172.46 |

BIGは赤/青の2種。各色は設定1 1/2184.53 → 設定6 1/1638.40。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- 「ファイアーヒーローS / ファイアーヒーロー / アトム / 50枚 / 1000円 / ベース / コイン持ち」を組み替え、当時解析・旧DB・回顧資料を横断したが、比較可能な直接数値を確定できず。
- 後継ファイアーヒーローIIの数値は流用しない。

## netIncrease

- CZから50Gの増加型RTへ突入することは当時パチマガスロマガで確認。
- P-WORLD掲示板の当時実戦投稿でも、CZ中にチェリーよりベルを先に引くことでRT50へ入る挙動が報告されている。
- 1Gあたり純増枚数は今回の再探索では直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

信頼度: ANALYSIS_HIGH（50G） / UNVERIFIED（純増/G）

## basicPayout

パチマガスロマガ:
- BIG: 規定払い出し474枚、純増約313枚。
- REG: 規定払い出し54枚、純増約36枚。

P-WORLD:
- BIG: 465枚を超える払い出しで終了。
- REG: 12ゲームまたは6回の入賞で終了。

BIG終了条件は表記定義に差があるため双方を保持。純増約313枚/約36枚は当時解析値として採用。

信頼度: ANALYSIS_HIGH / CONFLICT_DETAIL

## modeSpecificMinimumData

- CZ搭載。
- CZから50Gの増加型RTへ突入。
- P-WORLD当時掲示板には「CZからチェリーを引かずにベルを引けばRT50」とする実戦記録があり、リプパン/CZ転落・昇格型の挙動を補助確認。
- ボーナスとRT突入の連続が出玉の主要構造。
- 通常時ゲーム数天井を示す高信頼資料は今回確認できず。

## resetBehavior

### settingChangeBehavior

- 設定変更時にCZ開始、RT開始、特定モード再抽選、天井短縮となる本機固有の直接資料は、表記揺れ・メーカー名・設定変更/リセット/朝一を組み替えて再探索したが確定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時のCZ/RT残G・内部状態引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみ時のCZ/RT残G・内部状態引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常時ゲーム数天井そのものを確認できず、設定変更時のゲーム数リセット/引継ぎ対象となる天井カウンタも `NONE_CONFIRMED`。

### ceilingAfterReset

- リセット時短縮天井・変更後専用天井数値は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時モード再抽選、公開モード振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- CZ/RT状態の設定変更時処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（5号機初期。有利区間制度前）。

### resetBenefits

- 設定変更/朝一固有の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更/朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、液晶/ランプ等による設定変更・据え置き判別は、検索語を変えても直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 公開された設定変更時専用の数値は今回確認できず。

## sources

取得日: 2026-09-01

1. パチビー — 2007年11月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-11
   - 2007-11-26導入、アトム。
   - reliability: ANALYSIS_HIGH
2. P-WORLD — ファイアーヒーローS
   - https://www.p-world.co.jp/machine/database/4991
   - アトム、5号機RT、2007年11月、BIG/REG終了条件。当時掲示板に合算/機械割投稿とCZ→RT実戦記録あり。
   - reliability: ANALYSIS_HIGH（機種情報） / LOW_AUXILIARY（掲示板）
3. パチマガスロマガ — ファイアーヒーロー 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/atom_slot/01/a.php
   - 同時成立/CZ/RT、50G増加型RT、BIG約313枚、REG約36枚。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス抽選確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/atom_slot/01/h.php
   - 設定別BIG/REG/合算、PAYOUTシミュレート98.16〜103.08%。
   - reliability: ANALYSIS_HIGH
5. pachinko’s blog — アトム「ファイアーヒーロー」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/11/fire-hero
   - 2007年11月、ボーナス+RT、合算値、別系統機械割97.22〜106.65%。
   - reliability: ANALYSIS_SINGLE
6. Q&A検定通過整理 — アトムの検定通過機種
   - https://q-and-a.hatenablog.com/entry/2016/10/04/141528
   - 2007-10-15「ファイアーヒーロー S（回胴）」通過。
   - reliability: ANALYSIS_SINGLE
7. スロリスクタイム — A+RT機一覧
   - https://pachisuro100.com/a-rt/
   - ファイアーヒーローS（アトム、2007/11）とファイアーヒーローII（2008/5）を別機種として掲載。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数/ベース
- RTの1Gあたり純増枚数
- 設定変更時のCZ/RT状態処理
- 据え置き時のCZ/RT残G・内部状態引継ぎ
- 電源OFF→ON時のCZ/RT残G・内部状態引継ぎ
- 本機固有の変更判別要素

## conflicts

- 設定別機械割: パチマガスロマガのシミュレート98.16/99.15/100.12/101.14/102.10/103.08% と、後年整理97.22/98.69/100.67/102.19/104.33/106.65%が競合。平均せず両方保持。
- BIG終了条件: パチマガスロマガ「規定払い出し474枚（超過終了表記）」とP-WORLD「465枚を超える払い出しで終了」で表記差。実獲得約313枚は別定義として保持。
