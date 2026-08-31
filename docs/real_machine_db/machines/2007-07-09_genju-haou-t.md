# 幻獣覇王

machineName: 幻獣覇王
aliases: 幻獣覇王T / ゲンジュウハオウT / 幻獣覇王（IGT）
manufacturer: IGTジャパン
formalModel: ゲンジュウハオウT
releaseDate: 2007-07-09
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: COMPLETE_CORE
qaResetBehavior: PARTIAL

## releaseDateEvidence

- ALL7.jpの2007年7月導入予定一覧は `幻獣覇王 / アイジーティー / 2007-07-09` と掲載。
- HAZUSEの当時解析は `<2007年5月>` 表記で、作成日2007-05-15・更新日2007-07-10。これは解析ページ作成/掲載月と実導入日の混同余地があるため、導入日根拠としては弱い。
- 後年整理資料は2007年7月リリースとする。
- 本DBでは具体的なホール導入予定日を持つALL7.jpの `2007-07-09` を本線採用し、HAZUSEの2007年5月表記は月次CONFLICTメモとして保持する。

信頼度: INDUSTRY_SUPPORT + OLD_DB_CONFLICT

## payoutRateBySetting

HAZUSE当時解析:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.9% |
| 3 | 102.1% |
| 4 | 104.0% |
| 5 | 105.9% |
| 6 | 107.8% |

パチマガスロマガ旧ページのシミュレート値:

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.97% |
| 2 | 99.77% |
| 3 | 101.55% |
| 4 | 103.33% |
| 5 | 105.05% |
| 6 | 106.83% |

- 定義差/解析差があるため平均化せずCONFLICTとして両方保持する。

信頼度: ANALYSIS_HIGH / CONFLICT

## initialHitBySetting

パチマガスロマガ旧ページ。巫女ボーナス・兄様ボーナス・幻獣ボーナスは各設定で同一確率。

| 設定 | 巫女BONUS | 兄様BONUS | 幻獣BONUS | 合算 |
|---|---:|---:|---:|---:|
| 1 | 1/704.69 | 1/704.69 | 1/704.69 | 1/234.90 |
| 2 | 1/682.67 | 1/682.67 | 1/682.67 | 1/227.56 |
| 3 | 1/661.98 | 1/661.98 | 1/661.98 | 1/220.66 |
| 4 | 1/642.51 | 1/642.51 | 1/642.51 | 1/214.17 |
| 5 | 1/624.15 | 1/624.15 | 1/624.15 | 1/208.05 |
| 6 | 1/606.81 | 1/606.81 | 1/606.81 | 1/202.27 |

HAZUSEでも各ボーナス確率は丸め差内で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ旧ページの1000円あたりゲーム数:

| 設定 | 1000円/50枚あたり |
|---|---:|
| 1 | 43.54G |
| 2 | 44.45G |
| 3 | 45.39G |
| 4 | 46.37G |
| 5 | 47.40G |
| 6 | 48.47G |

信頼度: ANALYSIS_HIGH

## netIncrease

- 巫女ボーナス後に100GのRT「巫女チャンス」へ突入。
- HAZUSEはRTにパンク抽選なしと記載。
- RTの1Gあたり純増については `幻獣覇王 / ゲンジュウハオウT / IGT / 巫女チャンス / RT / 純増` 等で当時解析・旧DB・回顧資料を再探索したが、比較可能な高信頼数値を確定できずUNVERIFIED。

## basicPayout

資料間で平均獲得表記に差があるためCONFLICT保持。

HAZUSE:
- 巫女ボーナス: 466枚超払い出しで終了、平均約370枚
- 兄様ボーナス: 270枚超払い出しで終了、平均約210枚
- 幻獣ボーナス: 12G消化または8回入賞で終了、平均約100枚

パチマガスロマガ旧ページ:
- 巫女ボーナス: 規定払い出し456枚表記、純増約360枚
- 兄様ボーナス: 270枚、純増約260枚
- 幻獣ボーナス: 12G消化または8回入賞、純増約90枚

中古実機資料:
- 型式 `ゲンジュウハオウT`
- 巫女ボーナス466枚以上払い出し終了、平均約370枚
- 兄様ボーナス270枚以上払い出し終了、平均約210枚
- 幻獣ボーナス8回入賞または12G、平均約100枚

- 平均/純増/払い出し終了条件の定義を混同せず、差はCONFLICTとして保持する。

信頼度: ANALYSIS_HIGH / CONFLICT

## modeSpecificMinimumData

### 巫女チャンス

- 巫女ボーナス終了後に突入する100GのRT。
- HAZUSEではパンク抽選なし。
- 通常時ゲーム数天井やボーナス非経由のRT突入契機は今回確認できず。

信頼度: ANALYSIS_HIGH

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `幻獣覇王 / 幻獣覇王T / ゲンジュウハオウT / IGTジャパン` と `設定変更 / リセット / 朝一 / RT / 巫女チャンス / ガックン` を組み替え、当時解析・旧DB・回顧資料を横断したが、本機固有の設定変更時RT/内部状態処理を確定できる高信頼公開資料は確認できずUNVERIFIED。

carryOverBehavior:
- 据え置き時のRT残G、成立済みボーナス、その他内部状態の具体的引継ぎを示す本機固有資料はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの場合にRT残Gや内部状態を引き継ぐ/初期化するかを示す本機固有の公開資料はUNVERIFIED。

gameCounterReset:
- 通常時のゲーム数天井はNONE_CONFIRMED。
- RTは巫女ボーナス後100G固定だが、設定変更/据え置き/電断時のRT残G処理はUNVERIFIED。

ceilingAfterReset:
- 設定変更時の短縮天井・朝一専用天井はNONE_CONFIRMED。

modeAfterReset:
- 通常時のゲーム数モード/朝一専用モードはNONE_CONFIRMED。

stateAfterReset:
- 設定変更時のRT/成立済みボーナス等の状態処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更/朝一専用の公開恩恵はNONE_CONFIRMED。

resetPenalties:
- 設定変更時のみの公開不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、リール初動、表示等による設定変更/据え置き判別を確定できる高信頼資料は再探索後もUNVERIFIED。

numericResetData:
- 朝一当選率、リセット時RT突入率、短縮天井、モード振り分け等の比較可能な公開数値はNONE_CONFIRMED。

## sources

取得日: 2026-08-31

1. ALL7.jp — 2007年7月新台導入予定一覧
   - https://www.all7.jp/plans/index/2007/07/20
   - 幻獣覇王 / アイジーティー / 2007-07-09
   - reliability: INDUSTRY_SUPPORT
2. HAZUSE — 幻獣覇王 解析・機種情報
   - https://hazuse.com/i/data/genjuhaou/top.htm
   - 3ボーナス確率、機械割、巫女BIG後100G RT、パンク抽選なし、平均獲得枚数
   - reliability: OLD_DB_HIGH
3. パチマガスロマガ旧ページ — ボーナス抽選確率/機械割
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/45/h.php
   - 3ボーナス確率、合算、シミュレートPAYOUT
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧ページ — 小役/1000円ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/45/c.php
   - 1000円あたり43.54〜48.47G
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧ページ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/45/a.php
   - RT、100G、ボーナス獲得枚数表記
   - reliability: ANALYSIS_HIGH
6. 中一商事 — IGT 幻獣覇王 中古実機
   - https://www.nakaiti.com/html/igt002.html
   - 型式名ゲンジュウハオウT、RT、ボーナス仕様、平均獲得補助照合
   - reliability: RETROSPECTIVE_SUPPORT
7. pachinko’s blog — IGT Japan「幻獣覇王」
   - https://pachinko.hatenablog.jp/entry/2007/07/genjyu-haoh
   - 2007年7月リリース、機械割/ボーナス確率の後年照合
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields

- RT「巫女チャンス」の1Gあたり純増
- 設定変更時のRT残G/内部状態処理
- 据え置き時のRT残G/内部状態引継ぎ
- 電源OFF→ONのみのRT残G/内部状態処理
- 本機固有のガックン/リール初動判別
- 朝一専用の公開数値

## conflicts

1. 導入時期: ALL7.jp `2007-07-09`、HAZUSE見出し `<2007年5月>`、後年整理 `2007年7月`。本線は具体日を持つ7/9、HAZUSEの5月表記は掲載/解析時期混同余地を明記して保持。
2. 機械割: HAZUSE `97.9/99.9/102.1/104.0/105.9/107.8%` とパチマガスロマガのシミュレート `97.97/99.77/101.55/103.33/105.05/106.83%` が競合。平均化しない。
3. ボーナス獲得: HAZUSE/中古実機系の平均約370/210/100枚に対し、パチマガ旧ページは純増約360/260/90枚。定義差の可能性を含めCONFLICT保持。
