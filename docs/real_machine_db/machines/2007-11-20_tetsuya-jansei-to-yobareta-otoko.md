# 哲也～雀聖と呼ばれた男～

machineName: 哲也～雀聖と呼ばれた男～
manufacturer: アリストクラートテクノロジーズ
releaseDate: 2007-11-20
generation: 5号機
systemType: ボーナス + ART / CZ
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
retrievedAt: 2026-09-01

## 導入・型式整理

- 型式名: `哲也`。
- K-Naviの2007-10-10当時記事では、10月9日から内覧会が行われ、ホールデビューは2007年11月中旬予定とされている。
- パチビーの2007年11月新機種導入日では、2007-11-20導入機種として本機を掲載。
- P-WORLD、5号機クロニクルはいずれも2007年11月導入として掲載。
- 本DBでは具体的なホール導入日を持つパチビーを基準に `releaseDate: 2007-11-20` とする。

## 性能コア

### ボーナス確率 / 主要初当たり

| 設定 | BIG合成 | REG合成 | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/378.8 | 1/648.9 | 1/239.2 |
| 2 | 1/356.2 | 1/595.8 | 1/222.9 |
| 3 | 1/354.3 | 1/590.4 | 1/221.4 |
| 4 | 1/329.3 | 1/500.3 | 1/198.6 |
| 5 | 1/327.7 | 1/496.5 | 1/197.4 |
| 6 | 1/273.1 | 1/448.9 | 1/169.8 |

- 5号機クロニクルとP-WORLDで主要合成値が一致（丸め差のみ）。
- BIGは赤7/緑7/白7、REGは緑7/白7。色別確率には設定差があるが、物差し用途では主要初当たりのBIG/REG/全ボーナス合成を保存する。

### 機械割 / 出玉率

conflictStatus: CONFLICT

系統A（P-WORLD / 5号機クロニクル / 当時系5号機まとめwiki）:

| 設定 | 機械割 |
|---|---:|
| 1 | 98.6% |
| 2 | 99.7% |
| 3 | 102.0% |
| 4 | 104.3% |
| 5 | 105.7% |
| 6 | 109.3% |

系統B（後年スペック整理資料）:

| 設定 | 機械割 |
|---|---:|
| 1 | 99.2% |
| 2 | 100.2% |
| 3 | 102.8% |
| 4 | 103.9% |
| 5 | 106.0% |
| 6 | 109.2% |

- 数値差は単純な丸めだけでは説明できないため平均せず `CONFLICT` として双方を保持。
- 物差し集計時は同一定義の資料系統ごとに扱い、確定値へ統合しない。

### ベース

baseGamesPer50: UNVERIFIED

- `哲也 / 哲也～雀聖と呼ばれた男～ / アリストクラート / 型式 哲也` と `50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数` を組み替え、P-WORLD、K-Navi、5号機クロニクル、当時系wiki、後年回顧/スペック資料まで再探索したが、初代2007年機の比較可能な50枚あたりゲーム数を確定できなかった。
- 2020年の「哲也 -天運地力-」は別機種のため数値を混入させない。

### 純増 / 基本獲得

netIncrease:
- ART「玄人タイム」: 約+1.0枚/G

basicPayout:
- BIG: 約240枚
- REG: 約104枚

- P-WORLDでBIG約240枚、REG約104枚、ARTは1Gあたり約1枚増加と確認。

## ゲーム性 / 最低限の追加値

- ART「玄人タイム」は1セット30G / 100G / 1000G。
- ART中は3択チェリー等をナビし、規定G数消化またはボーナス当選まで継続。
- ボーナス後、RT後、通常ゲーム500G消化でCZ「天運チャンス」へ移行。
- 天運チャンス中の特定役入賞で玄人タイムへ。P-WORLDではチェリーこぼし目で30G、2連チェリーで100G、10枚役で1000GのARTへ入る構造を確認。
- 500Gは通常時の救済的CZ到達周期として比較可能な値なので保存する。

## v0.7 resetBehavior

検索語は `哲也 / 哲也～雀聖と呼ばれた男～ / アリストクラート / 型式 哲也 / 玄人タイム / 天運チャンス / 500G` と、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 宵越し / 天井 / モード / 状態 / ガックン` を組み替え、当時業界記事、P-WORLD、K-Navi、5号機クロニクル、当時系まとめwiki、後年回顧/スペック資料まで横断した。

resetBehavior:
  settingChangeBehavior: 設定変更時に通常500G周期、天運チャンス、玄人タイム/内部RT状態、ARTストックをどう処理するかの本機固有直接資料を確定できず UNVERIFIED。
  carryOverBehavior: 据え置き時の500G周期ゲーム数、CZ/ART/内部RT状態・ARTストックの引継ぎを直接確認できる本機固有資料を確定できず UNVERIFIED。
  powerCycleBehavior: 電源OFF→ONのみ時の500G周期、CZ/ART/内部RT状態・ARTストックの扱いを直接確認できず UNVERIFIED。
  gameCounterReset: 通常ゲーム500G消化で天運チャンスへ移行する通常仕様は CONFIRMED。設定変更/据え置き/電断時にこの500Gカウンタがリセットか引継ぎかは UNVERIFIED。
  ceilingAfterReset: 設定変更専用の短縮天井/短縮CZ周期の具体値は UNVERIFIED。通常時は500Gで天運チャンスへ移行。
  modeAfterReset: 朝一専用モード、設定変更専用モード振り分けを示す直接資料は UNVERIFIED。
  stateAfterReset: 天運チャンス、玄人タイム、内部RT状態、ARTストックの設定変更/据え置き/電断時処理は UNVERIFIED。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）。
  resetBenefits: 設定変更/朝一専用の確定恩恵または公開数値を示す本機固有資料は NONE_CONFIRMED。
  resetPenalties: 設定変更/朝一専用の不利要素を示す本機固有資料は NONE_CONFIRMED。
  resetDetection: 本機固有のガックン、初期出目、液晶表示、ゲーム数挙動等による変更/据え置き判別の直接資料は UNVERIFIED。
  numericResetData: 通常時500Gで天運チャンスへ移行する仕様のみ確認。設定変更後専用G数、朝一当選率/ART期待度、変更時モード振り分け、恩恵発生率は UNVERIFIED。

### resetBehavior判定メモ

- 通常時500G到達の天運チャンスは複数資料で本機の通常ゲーム性として確認できるが、設定変更後の500Gカウンタ処理を示す資料は別問題なので推測しない。
- P-WORLD掲示板には朝一ARTに関するユーザー投稿の痕跡があるが、個別実戦投稿のみで設定変更/据え置き挙動を確定できないため根拠値として採用しない。
- 2009年後継「哲也 新宿vs上野」および2020年「哲也 -天運地力-」のリセット仕様は初代へ流用しない。
- 有利区間は世代上非該当。

## sources

1. パチビー「2007年11月 新機種導入日」
   - https://www.pachibee.jp/machines/schedule/2007-11
   - 2007-11-20導入機種として本機を確認。
   - confidence: ANALYSIS_HIGH

2. K-Navi「パチスロ新機種『哲也～雀聖と呼ばれた男～』内覧会」2007-10-10
   - https://p-kn.com/topics/news/375/
   - 2007-10-09から内覧会、ホールデビュー2007年11月中旬予定、RTストック機能搭載を確認。
   - confidence: INDUSTRY

3. P-WORLD「哲也～雀聖と呼ばれた男～」
   - https://www.p-world.co.jp/machine/database/4948
   - メーカー、5号機ART/CZ、BIG約240枚、REG約104枚、ART約+1枚/G、30/100/1000G ART、通常500Gで天運チャンス、設定別ボーナス確率、機械割98.6〜109.3%を確認。
   - confidence: ANALYSIS_HIGH

4. 5号機クロニクル「アリストクラートテクノロジーズ 5号機全機種一覧」
   - https://5goki.com/aristocrat
   - 2007年11月導入、BIG/REG/全ボーナス合成、機械割98.6〜109.3%をP-WORLDと照合。
   - confidence: ANALYSIS_SINGLE

5. パチスロ5号機まとめwiki「哲也～雀聖と呼ばれた男～」
   - https://w.atwiki.jp/5gouki/pages/65.html
   - 2009年更新の当時系整理資料として設定別ボーナス確率、機械割98.6〜109.3%を照合。
   - confidence: ANALYSIS_SINGLE

6. pachinko's blog「アリストクラートテクノロジーズ『パチスロ 哲也 雀聖と呼ばれた男』の筺体＆スペック＆情報」
   - https://pachinko.hatenablog.jp/entry/2007/11/tetsuya
   - 2007年11月、型式名、BIG/REG/合成確率を概ね照合。機械割99.2/100.2/102.8/103.9/106.0/109.2%を掲載し、主要資料系統と差があるためCONFLICT根拠として保持。
   - confidence: ANALYSIS_SINGLE

7. K-Navi「哲也～雀聖と呼ばれた男～」現存機種ページ
   - https://p-kn.com/slot/659/
   - 本機固有ページ・関連当時記事の現存を確認。resetBehavior直接本文は今回確定できず。
   - confidence: ANALYSIS_SINGLE / RESET_DETAIL_UNVERIFIED

## missingFields

- 50枚あたりゲーム数 / ベース
- 設定変更時の500G周期・CZ/ART/内部RT・ARTストック処理
- 据え置き時の500G周期・CZ/ART/内部RT・ARTストック引継ぎ
- 電源OFF→ONのみ時の500G周期・CZ/ART/内部RT・ARTストック引継ぎ
- 設定変更専用の短縮周期/朝一専用モード/公開朝一数値
- 本機固有の設定変更判別挙動

## conflicts

- 機械割: P-WORLD / 5号機クロニクル / 当時系5号機まとめwikiは `98.6 / 99.7 / 102.0 / 104.3 / 105.7 / 109.3%`。別の後年スペック整理資料は `99.2 / 100.2 / 102.8 / 103.9 / 106.0 / 109.2%`。単純丸めではないため平均せずCONFLICT。
- BIG/REG合成値は主要資料間で概ね一致し、差は丸め精度の範囲として扱う。

## confidenceSummary

- release/date: INDUSTRY + ANALYSIS_HIGH
- performance core: ANALYSIS_HIGH + ANALYSIS_SINGLE / payoutRate CONFLICT
- ART/CZ/500G cycle: ANALYSIS_HIGH
- resetBehavior: PARTIAL / key transition behavior UNVERIFIED

## recordStatus

- coreStatus: PARTIAL
- resetBehaviorQA: PARTIAL
- primary reason: 50枚ベース未確定、機械割CONFLICT、設定変更/据え置き/電源OFF→ON時の500G周期・CZ/ART/内部RT/ARTストック処理未確定
