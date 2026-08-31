# 電撃ネットワーク

machineName: 電撃ネットワーク
manufacturer: トリビー
releaseDate: 2007-07
generation: 5号機初期
systemType: ボーナス + CZ + RT
coreStatus: PARTIAL
qaResetBehavior: PARTIAL

## releaseDateEvidence

- P-WORLDは導入開始を `2007年07月` と掲載。
- 後年整理のトリビー5号機一覧も `2007/07` としている。
- 直前handoffに残る当時K-Navi系発表会記事の要約では `2007年7月9日以降ホールデビュー予定`。一方、後年GABU一覧に `2007/06/05` 表記があるが、発表/検定/発売/導入日の定義を確定できないため平均せずCONFLICT保持。
- 本DBの時系列本線は複数資料が一致する `2007-07` とし、具体日 `7/9以降予定` は予定情報として補助保持する。

信頼度: CONFLICT（具体日） / ANALYSIS_HIGH（月粒度）

## payoutRateBySetting

後年整理資料:

| 設定 | 機械割 |
|---|---:|
| 1 | 95.5% |
| 2 | 97.2% |
| 3 | 99.8% |
| 4 | 104.1% |
| 5 | 107.0% |
| 6 | 111.1% |

- 今回、この設定別機械割を別系統の現存資料で完全照合できなかったためANALYSIS_SINGLEとして保持。

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

後年整理資料:

| 設定 | BIG合算 | ボーナスゲーム | 全ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/341 | 1/655 | 1/224 |
| 2 | 1/334 | 1/595 | 1/214 |
| 3 | 1/322 | 1/512 | 1/198 |
| 4 | 1/307 | 1/458 | 1/184 |
| 5 | 1/299 | 1/390 | 1/169 |
| 6 | 1/280 | 1/352 | 1/156 |

- P-WORLD/パチマガ旧ページでBIG・ボーナスゲームの規定払い出し枚数は照合できるが、設定別確率の完全な別表照合は今回未取得。

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

- `電撃ネットワーク / トリビー / 1000円 / 50枚 / ベース / コイン持ち / 回転数` を組み替え、P-WORLD、旧パチマガ、後年DB、回顧資料を再探索したが比較可能な代表値を確定できずUNVERIFIED。

## netIncrease

- パチマガスロマガ旧ページは本機を `同時成立あり / チャンスゾーン / RT` と明記し、RT「電撃タイム」に連チャン性があることを確認。
- RTの1セットG数、1Gあたり純増、CZからRTへの正確な公開突入条件について、現存する高信頼資料で今回確定できずUNVERIFIED。

信頼度: ANALYSIS_HIGH（RT/CZ搭載） / UNVERIFIED（純増等）

## basicPayout

- BIG: 345枚を超える払い出しで終了。
- ボーナスゲーム（REG相当）: 120枚を超える払い出しで終了。
- P-WORLDとパチマガスロマガ旧ページで一致。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

### 電撃チャンス / 電撃タイム

- ボーナス + CZ + RT機。
- CZ `電撃チャンス` からRT `電撃タイム` へ移行するゲーム性が当時掲示板・旧解析で確認される。
- RTには連チャン性がある。
- 完全再現用のCZ中詳細抽選・全RT移行振り分けは収集対象外。
- RT比較に必要な純増・セットG数は今回UNVERIFIED。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `設定変更 / リセット / 朝一 / 電撃チャンス / 電撃タイム / RT` で旧解析・古いDB・掲示板・回顧資料を再探索したが、設定変更時にCZ/RT状態や内部状態をどう初期化するかを確定できずUNVERIFIED。

carryOverBehavior:
- 据え置き時のCZ/RT状態・残G・内部状態の引継ぎはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの場合のCZ/RT状態・残G処理はUNVERIFIED。

gameCounterReset:
- 通常時のボーナスゲーム数天井は確認できずNONE_CONFIRMED。
- RT/CZ関連カウンタが設定変更時にリセットされるかはUNVERIFIED。

ceilingAfterReset:
- リセット短縮天井・朝一専用天井は確認できずNONE_CONFIRMED。

modeAfterReset:
- 朝一専用モードや設定変更専用モードは確認できずNONE_CONFIRMED。

stateAfterReset:
- 設定変更時のCZ/RT内部状態再抽選/初期化/引継ぎはUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更時固有の朝一恩恵は確認できずNONE_CONFIRMED。

resetPenalties:
- 設定変更時固有の不利要素は確認できずNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン/リール初動、液晶表示、CZ挙動等による変更判別は再探索後もUNVERIFIED。

numericResetData:
- 朝一RT突入率、設定変更時CZ移行率、短縮ゲーム数等の公開比較数値は今回UNVERIFIED。

## sources

取得日: 2026-08-31

1. P-WORLD — 電撃ネットワーク
   - https://www.p-world.co.jp/machine/database/4752
   - パチスロ、トリビー、2007年07月導入、BIG345枚超/ボーナスゲーム120枚超払い出し終了
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ旧 — 電撃ネットワーク 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/04/a.php
   - 同時成立あり/CZ/RT、電撃タイムに連チャン性、BIG345枚/REG120枚規定払い出し
   - reliability: ANALYSIS_HIGH
3. pachinko's blog — トリビー「パチスロ 電撃ネットワーク」の筐体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/07/dengeki-network
   - 2007.07、設定別機械割・BIG/ボーナスゲーム/合算
   - reliability: RETROSPECTIVE_SINGLE
4. 5号機クロニクル — トリビー5号機一覧
   - https://5goki.com/trivy
   - 2007年導入機として電撃ネットワークを掲載
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields

- 50枚あたりゲーム数/ベース
- RT純増/G
- RT1セットG数の高信頼確認
- CZ→RTの比較用公開数値
- 設定変更時のCZ/RT状態処理
- 据え置き時のCZ/RT状態・残G引継ぎ
- 電源OFF→ONのみのCZ/RT状態・残G処理
- 本機固有の変更判別/ガックン
- 公開朝一数値

## conflicts

1. 導入時期: P-WORLD/複数後年資料は2007年7月、直前handoffで確認済みの当時K-Navi系記事は7月9日以降ホールデビュー予定。一方GABU後年一覧に2007/06/05表記あり。日付定義が異なる可能性があるため平均せずCONFLICT保持。
