# カリビアンクイーン

machineName: カリビアンクイーン
aliases: カリビアンクィーン
manufacturer: ネット
releaseDate: 2007-07-08
generation: 5号機初期
systemType: ボーナス + AT（モード・ローズマリー）
coreStatus: COMPLETE_CORE
qaResetBehavior: PARTIAL

## releaseDateEvidence

- グリーンべると/P-WORLD業界ニュース（2007-06-01）は「納品は7月8日開始予定」と明記。
- ALL7.jpの月別予定表では2007-07-09扱いの資料もあるため、日単位は1日の差をCONFLICTとして保持する。
- 本DBの時系列本線は、当時業界記事の具体的な納品開始予定 `2007-07-08` を採用。

信頼度: INDUSTRY_HIGH

## payoutRateBySetting

K-Navi掲載値:

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 3 | 99.4% |
| 5 | 102.4% |
| 7 | 105.5% |

信頼度: ANALYSIS_HIGH

注: 5号機クロニクルには 97.8 / 101.5 / 105.0 / 108.4% と大きく異なる後年値が掲載されるためCONFLICT。平均化しない。

## initialHitBySetting

K-Navi掲載値:

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/291 | 1/343 | 1/157 |
| 3 | 1/273 | 1/321 | 1/147 |
| 5 | 1/257 | 1/308 | 1/139 |
| 7 | 1/241 | 1/284 | 1/130 |

- 当時グリーンべると記事でもBIG `1/291〜1/241`、REG `1/343〜1/284` のレンジと設定1/3/5/7の4段階を確認。
- 2007〜2008年期の旧スロ板テンプレ保存では設定5 REGを `1/303` とする差異があるため、このセルはCONFLICT。K-Naviの `1/308` を本文表に採用し、差異を残す。

信頼度: ANALYSIS_HIGH / setting5 REG CONFLICT

## baseGamesPer50

- 通常時: 1000円あたり約31G
- モード・ローズマリー中: 1000円あたり約41〜42G

グリーンべると2007-06-01当時記事。

信頼度: INDUSTRY_HIGH

## netIncrease

- モード・ローズマリーは3択5枚役をナビしてコイン持ちを改善するAT。
- 当時業界記事は「通常約31G/1000円 → モード中約41〜42G/1000円」としており、RTのような純増枚/G値ではなくベース改善として公開。
- 比較用の明確な純増枚/G: NOT_APPLICABLE / UNVERIFIED。

## basicPayout

- BIG: 純増約308枚
- REG: 純増約104枚（P-WORLD機種DBは約100枚表記）
- K-Navi: BIGは345枚超獲得で終了、REGは119枚超獲得で終了。

信頼度: INDUSTRY_HIGH + ANALYSIS_HIGH

## modeSpecificMinimumData

### モード・ローズマリー

- 全ボーナス終了後に突入する3択5枚役ナビAT。
- 当時グリーンべると記事: 平均継続約100G、最低80G、最大1000G。
- P-WORLD機種DB: BIG後80〜1000G、REG後100G固定。
- BIG中のスゴロク結果がBIG後の継続ゲーム数に影響。
- 高設定ほど170G以上が選択されやすい旨をP-WORLD機種DBで確認。
- 専用演出はなく、主目的はベースアップ。

信頼度: INDUSTRY_HIGH + ANALYSIS_HIGH

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `カリビアンクイーン / カリビアンクィーン / NET / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール初動 / モード・ローズマリー / AT 引継ぎ / 残りゲーム` を組み替え、当時業界記事・P-WORLD・K-Navi・旧テンプレ/古いDB・回顧資料を再探索。
- 設定変更時にモード・ローズマリー残G/AT状態を消去・保持するかを示す本機固有の高信頼資料は確認できずUNVERIFIED。
- 通常時ゲーム数天井、周期天井、朝一専用初当たりモードはNONE_CONFIRMED。

carryOverBehavior:
- 据え置き時に前日のモード・ローズマリー残Gを保持するかはUNVERIFIED。
- 通常時天井/周期ゲーム数の持越しはNONE_CONFIRMED / NOT_APPLICABLE。

powerCycleBehavior:
- 電源OFF→ONのみでモード・ローズマリー残G/AT状態を保持するかはUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井・周期天井はNONE_CONFIRMED / NOT_APPLICABLE。
- モード・ローズマリーはボーナス後80〜1000G（REG後100G）の有限区間だが、設定変更/電断時の残G処理はUNVERIFIED。

ceilingAfterReset:
- 通常時天井・リセット短縮天井はNONE_CONFIRMED / NOT_APPLICABLE。

modeAfterReset:
- 朝一専用モード、設定変更専用モード、設定変更時専用ATゲーム数振り分けはNONE_CONFIRMED。
- モード・ローズマリーの通常突入契機はボーナス終了後であり、設定変更のみでの突入恩恵はNONE_CONFIRMED。

stateAfterReset:
- モード・ローズマリー滞在中の設定変更/据え置き/電源OFF→ON処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の短縮天井、朝一AT、初当たり優遇、専用モード振り分け等はNONE_CONFIRMED。

resetPenalties:
- 設定変更によりモード・ローズマリー残Gを失うかどうか自体がUNVERIFIEDのため、公開不利として断定しない。

resetDetection:
- 本機固有のガックン、リール初動、液晶表示、モード・ローズマリー表示等による設定変更/据え置き判別は再探索後もUNVERIFIED。

numericResetData:
- 公開朝一数値: 今回未確認
- 短縮天井: NOT_APPLICABLE / NONE_CONFIRMED
- 設定変更時AT/モード振り分け: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると / P-WORLD業界ニュース — 『カリビアンクイーン』はBB中に秘密あり（2007-06-01）
   - https://news.p-world.co.jp/articles/2220/greenbelt
   - BIG約308枚、REG約104枚、モード・ローズマリー、平均約100G/最低80G/最大1000G、通常約31G/1000円・モード中約41〜42G/1000円、4段階設定、ボーナス確率レンジ、納品7月8日開始予定
   - reliability: INDUSTRY_HIGH
2. P-WORLD — カリビアンクイーン
   - https://www.p-world.co.jp/machine/database/4753
   - BIG約308枚、REG約100枚、BIG後AT80〜1000G、REG後100G固定、高設定ほど170G以上が選ばれやすい
   - reliability: ANALYSIS_HIGH
3. K-Navi — カリビアンクィーン
   - https://p-kn.com/slot/592/
   - 設定別BIG/REG/合算、機械割96.5〜105.5%、払い出し終了条件
   - reliability: ANALYSIS_HIGH
4. K-Navi業界ニュース — カリビアンクィーン発売決定（2007-05-14）
   - https://p-kn.com/topics/news/204/
   - ネット新機種として当時発表を確認
   - reliability: INDUSTRY
5. スロ板blog — カリビアンクイーン（旧2ch機種テンプレ保存）
   - https://slbl.blog.shinobi.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%EF%BC%9A%E3%81%8B%E8%A1%8C/%E3%82%AB%E3%83%AA%E3%83%93%E3%82%A2%E3%83%B3%E3%82%AF%E3%82%A4%E3%83%BC%E3%83%B3
   - 設定別確率・機械割の当時テンプレ保存。設定5 REGのみ1/303でK-Navi 1/308と競合
   - reliability: OLD_DB_SUPPORT
6. 5号機クロニクル — ネット5号機一覧
   - https://5goki.com/net
   - 2007年7月機として掲載。ただし本機の機械割・ボーナス仕様・RT記述が当時資料/P-WORLDと大きく食い違うためCONFLICT資料としてのみ保持
   - reliability: RETROSPECTIVE_CONFLICT
7. ALL7.jp — 2007年7月導入予定一覧
   - https://www.all7.jp/plans/index/2007/07
   - 2007-07-09予定扱い。業界記事の7/8納品開始予定との差を日付CONFLICTとして保持
   - reliability: OLD_DB

## missingFields

- 設定変更/据え置き/電源OFF→ON時のモード・ローズマリー残G/AT状態処理
- 本機固有のガックン/設定変更判別
- 公開朝一数値

## conflicts

1. 導入日: グリーンべると当時記事 `2007-07-08納品開始予定` / ALL7.jp `2007-07-09予定`。本線は当時記事の7/8を採用し、1日差を保持。
2. 設定5 REG: K-Navi `1/308` / 旧スロ板テンプレ `1/303`。平均化せずK-Navi値を本文表へ採用。
3. 機械割: K-Navi・旧テンプレ `96.5/99.4/102.4/105.5%` に対し、5号機クロニクル `97.8/101.5/105.0/108.4%`。大差のためCONFLICT。前者を当時系資料との整合側として採用。
4. 5号機クロニクルにはBIG約250枚/REG約104枚・RT機能付きという記述があるが、2007年当時業界記事とP-WORLDはBIG約308枚、REG約100〜104枚、3択5枚役ナビAT「モード・ローズマリー」で一致。本DBは当時資料側を採用。

## status

COMPLETE_CORE
