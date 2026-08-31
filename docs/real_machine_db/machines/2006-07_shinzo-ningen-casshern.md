# 新造人間キャシャーン

machineName: 新造人間キャシャーン
manufacturer: JPS
releaseDate: 2006-07
generation: 5号機初期
systemType: ボーナス + RT + インタラクティブAT
qaResetBehavior: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.0% |
| 2 | 99.5% |
| 3 | 100.5% |
| 4 | 102.0% |
| 5 | 103.5% |
| 6 | 105.0% |

信頼度: ANALYSIS_HIGH

## initialHitBySetting

設定別ボーナス確率: UNVERIFIED

## baseGamesPer50

UNVERIFIED

## netIncrease

AT/RTの1Gあたり純増: UNVERIFIED

## basicPayout

UNVERIFIED

## modeSpecificMinimumData

- 型式名: パープル2
- 5号機初期にRTとATを併用
- 通常時の3種類のミニゲーム成功を契機にATが発動する「インタラクティブAT」を搭載
- AT発動率が異なる「街」「湖畔」「荒野」の3ステージが存在することを当時資料で確認

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 本機は2006年型「パープル2」で、RTとATを併用することは既存の業界/企業資料で確認済み。
- `新造人間キャシャーン / パープル2 / JPS / 2006` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / AT / RT` を組み替えて再探索したが、設定変更時にRT/AT・ステージ・ミニゲーム関連状態をどう処理するかを直接示す本機固有資料は確認できずUNVERIFIED。

carryOverBehavior:
- 据え置き時のRT/AT残状態やミニゲーム由来AT状態の保持可否はUNVERIFIED。
- 通常時ゲーム数天井はNONE_CONFIRMED。

powerCycleBehavior:
- 電源OFF→ONのみでRT/AT状態を保持するかは本機固有資料でUNVERIFIED。

gameCounterReset:
- 通常時ボーナス天井・ゲーム数管理型の公開天井はNONE_CONFIRMED / NOT_APPLICABLE。
- RT/ATの残Gまたは内部状態を設定変更/電断時にどう扱うかはUNVERIFIED。

ceilingAfterReset:
- 設定変更時の短縮天井・朝一専用天井はNONE_CONFIRMED。

modeAfterReset:
- 「街」「湖畔」「荒野」の3ステージはAT発動率が異なる通常時ステージとして既知だが、設定変更時の初期ステージ/内部状態振り分けはUNVERIFIED。

stateAfterReset:
- RT/インタラクティブAT中の設定変更・据え置き・電源OFF→ON時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用のAT/RT優遇、短縮天井、朝一専用抽選など比較可能な公開恩恵はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要な不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、リール初動、表示、ステージ等による設定変更/据え置き判別は再探索後もUNVERIFIED。

numericResetData:
- 公開朝一数値: 今回未確認
- 短縮天井: NONE_CONFIRMED
- 設定変更時モード/ステージ振り分け: UNVERIFIED

### resetBehavior QAメモ

- JPSの後続機 `ホークIII` には設定変更後RTという特徴があることを回顧資料で確認できるが、別機種仕様を本機へ流用しない。
- 本機固有の設定変更/据え置き/電断処理は推測せずUNVERIFIEDのまま保持。
- 既存性能コア判定・数値は今回のreset QAでは崩していない。

## sources

取得日: 2026-09-01

1. グリーンべると — JPSからパチスロ『キャシャーン』
   - https://web-greenbelt.jp/00004745/
   - 2006-06-06発表、型式名パープル2
   - reliability: INDUSTRY
2. P-WORLD — 新造人間キャシャーン
   - https://www.p-world.co.jp/machine/database/4245
   - 型式名パープル2、設定別出玉率98.0/99.5/100.5/102.0/103.5/105.0%
   - reliability: ANALYSIS_HIGH
3. 5号機クロニクル — JPS全機種一覧
   - https://5goki.com/jps
   - 導入時期2006/7、同一設定別機械割
   - reliability: ANALYSIS_SINGLE
4. コムシード 2006-07-20ニュースリリース
   - https://www.commseed.net/news-old/pdf/news_pdf/2006/060720_p1.pdf
   - 実機『新造人間キャシャーン』のインタラクティブAT、3ステージ・3ミニゲームを説明
   - reliability: INDUSTRY
5. パチ7 — JPS歴史レビュー
   - https://pachiseven.jp/articles/detail/11436
   - 2006年機、5号機でRTとATを同時搭載した機種として回顧。後続ホークIIIの設定変更後RTは本機へ転用していない
   - reliability: RETROSPECTIVE

## missingFields

- 設定別ボーナス確率
- 50枚あたりゲーム数
- AT/RT純増
- 基本獲得枚数
- 設定変更/据え置き/電源OFF→ON時のRT/AT状態処理
- 本機固有の変更判別
- 公開朝一数値

## conflicts

- 同名の2008年JPS機『新造人間キャシャーン』が存在する。検索結果に2008年機のTYPE-F/ART数値が混入しやすいため、本レコードでは型式名「パープル2」の2006年機だけを採用し、2008年機の数値は転記していない。

## status

PARTIAL