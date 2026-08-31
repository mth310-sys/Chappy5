# 信長の野望 天下創世 第二の刻

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: 信長の野望 天下創世 第二の刻
manufacturer: IGTジャパン
releaseDate: 2007-08-20
generation: 5号機
systemType: ノーマル / ボーナス主体 / 小役同時成立 / 3GプチRT

## releaseDate evidence

- 2007-08-07付プレイグラフ転載記事は、IGTジャパンが「信長の野望・天下創世～第二の刻～」の**販売を開始**したと報道。
- ALL7.jpは一般導入予定を `2007-08-20` と掲載。
- パチビーも `2007-08-20` 導入機種として掲載。
- HAZUSE当時ページは `<2007年8月>` と記録。

販売開始日とホール導入日を混同せず、本DBの時系列本線は一般導入日 `2007-08-20` を採用する。

信頼度: INDUSTRY / OLD_DB

## payoutRateBySetting

資料間で設定6を中心に差が大きいため、平均せずCONFLICTとして保持する。

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.68% |
| 2 | 99.23% |
| 3 | 100.76% |
| 4 | 102.67% |
| 5 | 104.19% |
| 6 | 105.73% |

### 5号機クロニクル整理値

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 99.3% |
| 3 | 101.0% |
| 4 | 103.1% |
| 5 | 105.5% |
| 6 | 108.3% |

2007年当時の新台一覧保存資料にも `97.4%〜108.3%` とあり、5号機クロニクル側レンジと整合する。一方、パチマガスロマガは明示的にシミュレート値として97.68〜105.73%を掲載。定義差/算出条件差の可能性があるため、どちらかへ寄せずCONFLICT保持。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ解析値。赤/青のBIGは同率、赤/青REGも同率として掲載され、下表は合成値。

| 設定 | BIG合成 | REG合成 | 全ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/399.61 | 1/655.36 | 1/248.24 |
| 2 | 1/390.10 | 1/606.81 | 1/237.45 |
| 3 | 1/381.02 | 1/564.97 | 1/227.56 |
| 4 | 1/372.36 | 1/528.52 | 1/218.45 |
| 5 | 1/364.09 | 1/496.48 | 1/210.05 |
| 6 | 1/356.17 | 1/468.11 | 1/202.27 |

5号機クロニクルの丸め値（BIG 1/399.6→1/356.2、REG 1/655.4→1/468.1、合成1/248.2→1/202.3）と一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガの通常時1000円あたりゲーム数。プチRT非考慮。

| 設定 | G/50枚 |
|---|---:|
| 1 | 44.63G |
| 2 | 45.12G |
| 3 | 45.63G |
| 4 | 46.67G |
| 5 | 47.20G |
| 6 | 47.75G |

信頼度: ANALYSIS_HIGH

## netIncrease

- 出玉増加を主目的とするRT/ARTは搭載しないノーマルタイプ。
- 通常時チェリー入賞後に3GのプチRTへ移行し、プチRT中リプレイ確率は1/2.50とパチマガスロマガに掲載。
- プチRTの純増枚数/Gは比較用の公表値を確認できず、物差し値としては `NOT_APPLICABLE / UNVERIFIED`。

信頼度: ANALYSIS_HIGH

## basicPayout

パチマガスロマガおよび当時HAZUSE資料:

- BIG（赤7/青7）: 400枚超払い出し終了 / 純増約360枚
- REG（赤赤BAR/青青BAR）: 8回入賞または12G消化で終了 / 純増約104枚

複数当時系資料でボーナス終了条件が整合。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 前作「信長の野望 天下創世R」の後継機。
- 純粋なノーマルタイプで、小役同時成立あり。
- 前作よりBB中のゲーム数を58Gから27Gへ短縮したと2007-08-07付業界記事が報道。
- 1枚役を追加し、出目のバリエーションを拡張。
- パチマガスロマガではチェリー入賞後3GのプチRTを確認。
- 通常時ベルは設定差あり（1/5.85→1/5.55）だが、今回の物差し目的では主要コアのみ保持し全小役テーブルの再現はしない。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `信長の野望 天下創世 第二の刻 / 天下創生 第二の刻 / IGT / 2007 / 型式・表記揺れ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / プチRT / ガックン` を組み替え、当時HAZUSE、パチマガスロマガ、K-Navi、業界記事、後年DB・回顧資料を横断。
- 本機固有の設定変更時に保持/消去される内部ゲーム数やモード管理を示す高信頼資料は確認できずUNVERIFIED。
- 通常時はノーマルタイプで、ゲーム数解除型AT/ARTや通常モード管理を主要ゲーム性とする資料は確認されない。

carryOverBehavior:
- 据え置き時の通常ゲーム数/内部状態に関する本機固有の公表情報はUNVERIFIED。
- ボーナス主体ノーマル機で、通常時天井や周期モードの存在はNONE_CONFIRMED。

powerCycleBehavior:
- 電源OFF→ONのみの場合の本機固有内部状態処理はUNVERIFIED。
- 3GプチRT中に電源断した場合の残G/RT状態保持について明記資料を確認できずUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井・周期CZ・規定G解除はNONE_CONFIRMED。
- 設定変更時に参照すべき公開天井カウンタ数値はNONE_CONFIRMED。

ceilingAfterReset:
- 通常時ゲーム数天井そのものが確認されず、リセット時短縮天井/変更天井もNONE_CONFIRMED。

modeAfterReset:
- 設定変更時専用モード、朝一専用モード、モード再抽選/振り分け数値はNONE_CONFIRMED。

stateAfterReset:
- 通常時の主要な高確/低確状態管理はNONE_CONFIRMED。
- 3GプチRT状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機・有利区間制度導入前）。

resetBenefits:
- 朝一専用RT、短縮天井、設定変更時のみのボーナス/CZ優遇等はNONE_CONFIRMED。

resetPenalties:
- 設定変更時固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のリールガックン、液晶表示、ゲーム数挙動などによる変更/据え置き判別は十分再探索後もUNVERIFIED。

numericResetData:
- リセット短縮天井: NONE_CONFIRMED
- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- 設定変更専用初当たり/CZ数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 公開朝一数値: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. Pマンズ / プレイグラフ転載 — IGTジャパンが「信長の野望」第3弾（2007-08-07）
   - https://p-mans.blogspot.com/2007/08/
   - 販売開始、前作後継、BB中58G→27G短縮、1枚役追加
   - reliability: INDUSTRY
2. ALL7.jp — 2007年8月新台導入予定一覧
   - https://www.all7.jp/plans/index/2007/08
   - `2007-08-20` 導入予定
   - reliability: OLD_DB
3. パチビー — 2007年08月 新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-08
   - `2007-08-20` 導入機種として掲載
   - reliability: OLD_DB
4. パチマガスロマガ — 信長の野望 天下創世 第二の刻 機種DB
   - https://psmaga.com/database/machine/slot_index.php?id=5939
   - 設定別BIG/REG/合算、シミュレートPAYOUT、BIG約360枚、REG約104枚
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/47/a.php
   - ノーマル/同時成立あり/プチRT、規定払い出しと純増
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 小役確率/1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/47/c.php
   - 44.63〜47.75G/50枚、チェリー後3GプチRT、RT中リプレイ1/2.50
   - reliability: ANALYSIS_HIGH
7. HAZUSE — 信長の野望 天下創世 第二の刻（2007-08-26作成当時ページ）
   - https://hazuse.com/i/data/nobunaga2/top.htm
   - 5号機、2007年8月、2種BIG/2種REG、ボーナス終了条件
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY
8. 5号機クロニクル — IGTジャパン5号機一覧
   - https://5goki.com/igt
   - 導入2007/8、ボーナス確率丸め値、機械割97.4〜108.3%
   - reliability: RETROSPECTIVE
9. 2007年当時スロット新台一覧保存資料
   - https://paperzz.com/doc/5762410/%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7
   - 信長の野望・天下創世 第二の刻 出率97.4%〜108.3%掲載
   - reliability: ARCHIVE / INDUSTRY_SECONDARY
10. パチセブン — IGT Japan全機種レビュー
   - https://pachiseven.jp/articles/detail/13009
   - 本機を前作同様の純粋なノーマルタイプと回顧
   - reliability: RETROSPECTIVE

## missingFields

- 設定変更時の3GプチRT状態処理
- 据え置き/電源OFF→ON時のプチRT残G・内部状態処理
- 本機固有の設定変更判別/ガックン
- 公開朝一数値

## conflicts

- 機械割: パチマガスロマガのシミュレート値 `97.68/99.23/100.76/102.67/104.19/105.73%` と、5号機クロニクルおよび当時新台一覧保存資料の `97.4/99.3/101.0/103.1/105.5/108.3%` が競合。平均せず双方を保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
