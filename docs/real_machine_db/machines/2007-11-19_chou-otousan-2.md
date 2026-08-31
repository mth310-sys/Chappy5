# 超お父さん2

machineName: 超お父さん2
manufacturer: SNKプレイモア
releaseDate: 2007-11-19
generation: 5号機
systemType: ボーナス + RT / CZ
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
retrievedAt: 2026-09-01

## 導入・型式整理

- 型式名: `スーパーオトウサン2X`。
- 当時グリーンべると記事では2007-10-18発表展示会、納品は2007-11-18開始。
- パチビーの当時導入一覧では2007-11-19導入。
- 5号機クロニクルも2007年11月導入として掲載。
- 本DBのreleaseDateはホール導入日基準で2007-11-19を採用し、納品開始2007-11-18との差は定義差として保持する。

## 性能コア

### ボーナス確率 / 主要初当たり

| 設定 | REG | ボーナス合成 |
|---|---:|---:|
| 1 | 1/468.1 | 1/199.8 |
| 2 | 1/439.8 | 1/191.6 |
| 3 | 1/428.3 | 1/183.1 |
| 4 | 1/399.6 | 1/171.1 |
| 5 | 1/387.8 | 1/168.9 |
| 6 | 1/374.5 | 1/159.8 |

- 5号機クロニクルとP-WORLDでREG・ボーナス合成は丸め差の範囲で一致。
- BIGは赤7/青7/白7の3種類。5号機クロニクルは各色同一確率として設定1 `1/1040.3` → 設定6 `1/829.6` を掲載。
- P-WORLDは赤/青/白を個別掲載し、特に設定1などで各色にごく小さい差がある（例: 設定1 赤1/1040.25、青1/1045.25、白1/1057.03）。物差し用途では主要初当たりの合成値を採用し、色別の微差は実機完全再現対象外として深掘りしない。

### 機械割 / 出玉率

| 設定 | 機械割 |
|---|---:|
| 1 | 97.6% |
| 2 | 99.9% |
| 3 | 102.7% |
| 4 | 106.0% |
| 5 | 107.1% |
| 6 | 110.1% |

- 5号機クロニクル、P-WORLD、当時系まとめwikiで一致。

### ベース

baseGamesPer50: UNVERIFIED

- `超お父さん2 / スーパーオトウサン2X / SNKプレイモア` と `50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数` を組み替え、当時業界記事、P-WORLD、K-Navi、5号機クロニクル、当時系まとめwiki、回顧資料まで横断したが、比較可能な50枚あたりゲーム数を確定できなかった。

### 純増 / 基本獲得

netIncrease:
- RT「バトルチャンス」: 約+0.3枚/G

basicPayout:
- BIG: 約270枚固定
- REG: 平均約110枚

- 当時グリーンべるととP-WORLDで一致。
- K-NaviではBIG 346枚超払い出し終了、REG 149枚超払い出し終了の規定を掲載しているが、実獲得目安とは定義を分ける。

## ゲーム性 / 最低限の追加値

- RT「バトルチャンス」は1セット30G、純増約+0.3枚/G。
- RT終了後はCZへ入り、CZから通常ゲームへ転落しない限り約67%でRTがループする。
- 全ボーナス後とRT終了後にCZへ移行。
- 赤7BIG/青7BIG後は最初の1GのみRT突入期待度が高い「超チャンスゾーン」。
- CZ中、チェリーまたはリプレイ成立でRTへ、ベル成立で通常状態側へ移行する構造をP-WORLDで確認。
- 通常ゲーム600G消化で内部的にCZへ突入する周期救済をP-WORLDで確認。当時系まとめwikiにはCZからベル成立時に600Gの低確RTへ移る説明があり、600G後のCZ再到達構造と整合する。

## v0.7 resetBehavior

検索語は `超お父さん2 / スーパーオトウサン2X / SNKプレイモア / バトルチャンス / チャンスゾーン / 600G` と、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 宵越し / 天井 / 周期 / モード / 状態 / ガックン` を組み替え、当時業界記事、P-WORLD、K-Navi、当時系まとめwiki、5号機DB、回顧資料まで横断した。

resetBehavior:
  settingChangeBehavior: 設定変更時に600G周期、CZ/低確RT/バトルチャンス状態をどう処理するかの直接本文を確定できず UNVERIFIED。
  carryOverBehavior: 据え置き時の600G周期ゲーム数、CZ/RT状態引継ぎを直接確認できる本機固有資料を確定できず UNVERIFIED。
  powerCycleBehavior: 電源OFF→ONのみ時の600G周期、CZ/RT状態の扱いを直接確認できず UNVERIFIED。
  gameCounterReset: 通常ゲーム600G消化でCZへ入る周期救済そのものは CONFIRMED。設定変更/据え置き/電断時の600Gカウンタ処理は UNVERIFIED。
  ceilingAfterReset: 設定変更専用の短縮周期/短縮天井の具体数値は UNVERIFIED。通常時の救済周期は600G。
  modeAfterReset: 朝一専用モード/設定変更専用モード振り分けの具体値は UNVERIFIED。
  stateAfterReset: CZ/低確RT/30G RTの設定変更・据え置き・電断時処理は UNVERIFIED。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）。
  resetBenefits: K-Naviの現存機種ページに狙い目・天井・朝一項目として「朝一はお得!?」へのリンクが残るため、朝一固有情報が掲載されていた痕跡は確認。ただしリンク先本文が現在取得不能で、恩恵内容・条件・数値を確定できないため UNVERIFIED。
  resetPenalties: 設定変更/朝一専用の不利要素を具体的に示す直接資料は NONE_CONFIRMED。
  resetDetection: 本機固有のガックン、初期出目、表示等による設定変更/据え置き判別の直接資料は UNVERIFIED。
  numericResetData: 通常時600GでCZへ到達する救済周期は確認。設定変更後専用G数、朝一当選率/RT期待度、変更時モード振り分け、リセット恩恵発生率は UNVERIFIED。

### resetBehavior判定メモ

- 「600G」は通常時の救済周期としてP-WORLDに明記されるため確認値として保存する。
- K-Naviには「朝一はお得!?」という専用項目の存在までは確認できるが、現在リンク先本文が取得できない。見出しだけから設定変更恩恵や状態を推測しない。
- 初代「スーパーお父さん」や後継「極お父さん」のリセット仕様は本機へ流用しない。
- 有利区間は世代上非該当。

## sources

1. グリーンべると / P-WORLD業界ニュース「RT連続機能がさらに充実、『超お父さん2』」2007-10-19
   - https://news.p-world.co.jp/articles/2438/greenbelt
   - 型式名、2007-10-18発表展示会、納品2007-11-18開始、RT 30G、約+0.3枚/G、約67%ループ、BIG約270枚、REG平均約110枚を確認。
   - confidence: INDUSTRY

2. パチビー 2007年11月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-11
   - 2007-11-19導入として超お父さん2を確認。
   - confidence: ANALYSIS_HIGH

3. P-WORLD「超お父さん2」
   - https://www.p-world.co.jp/machine/database/4947
   - 設定別ボーナス確率/合算、機械割、BIG約270枚、REG約110枚、RT純増約+0.3枚/G、30G RT、CZ、通常ゲーム600GでCZへ入る周期救済を確認。
   - confidence: ANALYSIS_HIGH

4. 5号機クロニクル「SNKプレイモア 5号機全機種一覧」
   - https://5goki.com/snkplaymore
   - 2007年11月導入、設定別BIG/REG/ボーナス合成、機械割を照合。
   - confidence: ANALYSIS_SINGLE

5. パチスロ5号機まとめwiki「超お父さん2」
   - https://w.atwiki.jp/5gouki/pages/86.html
   - 2008年時点の当時系整理資料として設定別ボーナス合成/機械割、30G RT・67%ループ、CZ/600G低確RT構造を照合。
   - confidence: ANALYSIS_SINGLE

6. K-Navi「超お父さん2」
   - https://p-kn.com/slot/660/
   - BIG/REGの払い出し終了条件、30G RT、超CZ概要を確認。狙い目・天井・朝一欄に「朝一はお得!?」という専用リンクの存在を確認したが、リンク先本文は現在取得不能のためresetBenefitsの具体内容には使用していない。
   - confidence: ANALYSIS_SINGLE / RESET_DETAIL_UNVERIFIED

7. パチマガスロマガFREE 回顧「超って書いてスーパーと読みます」
   - https://pachimaga.com/free/special/75bc9eed9a9585b9949ca883507a7a8de58b96ed.php
   - 2007年11月登場のシリーズ第2弾、初代を踏襲したRT系統であることを回顧資料として確認。
   - confidence: ANALYSIS_SINGLE / RETROSPECTIVE

## missingFields

- 50枚あたりゲーム数 / ベース
- 設定変更時の600G周期ゲーム数・CZ/RT状態処理
- 据え置き時の600G周期ゲーム数・CZ/RT状態引継ぎ
- 電源OFF→ONのみ時の600G周期ゲーム数・CZ/RT状態引継ぎ
- K-Navi「朝一はお得!?」の失われた本文に相当する具体的朝一恩恵/条件/数値
- 本機固有の設定変更判別挙動

## conflicts

- 色別BIG確率は、5号機クロニクルが各色同率として掲載する一方、P-WORLDは各色にごく小さい差を掲載。主要初当たりのボーナス合成値・機械割は一致するため、物差し用途では合成値を採用し、色別値は定義/精度差として保持する。
- 導入日は納品開始2007-11-18（当時業界記事）とホール導入2007-11-19（パチビー）の定義差。releaseDateはホール導入日2007-11-19を採用。

## confidenceSummary

- release/date: INDUSTRY + ANALYSIS_HIGH
- performance core: INDUSTRY + ANALYSIS_HIGH + ANALYSIS_SINGLE
- RT/CZ/600G周期: ANALYSIS_HIGH + ANALYSIS_SINGLE
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- resetBehavior: PARTIAL / UNVERIFIED_AFTER_RESEARCH for reset-specific behavior
