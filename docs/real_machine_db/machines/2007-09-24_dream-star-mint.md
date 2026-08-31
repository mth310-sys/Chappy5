# ドリスタ -ミントのヒロイン救出大作戦-

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: ドリスタ -ミントのヒロイン救出大作戦-
manufacturer: NET（ネット）
formalModelName: ドリスタA1
releaseDate: 2007-09-24
generation: 5号機
systemType: ボーナス + ART / 1Gチャンスゾーン

## releaseDate evidence

- グリーンべると2007-08-31当時記事で「納品は9月24日からスタートの予定」と明記。
- NET公式サイトが2007年当時の製品ページとして現存。
- 本DBでは当時業界記事の納品開始日2007-09-24を時系列キーに採用。

信頼度: OFFICIAL / INDUSTRY_HIGH

## payoutRateBySetting

CONFLICT

### K-Navi

| 設定 | 機械割 |
|---|---:|
| 1 | 98.0% |
| 3 | 100.0% |
| 5 | 104.0% |
| 7 | 108.0% |

### pachinko’s blog 旧機種整理

| 設定 | 出玉率 |
|---|---:|
| 1 | 95.0% |
| 3 | 98.4% |
| 5 | 102.8% |
| 7 | 108.0% |

### 5号機クロニクル（二次整理）

- 98.1 / 101.6 / 106.0 / 110.8%

設定1〜7で資料差が大きいため平均せずCONFLICT。5号機クロニクルは本機のART名称・基本性能説明にNET公式/2007年当時業界記事と整合しない箇所があるため、コア根拠には採用せず機械割競合の補助資料としてのみ保持。

信頼度: CONFLICT

## initialHitBySetting

| 設定 | 赤7BIG | 青7BIG | BIG合算 | MINT BONUS | ボーナス合算（概算） |
|---|---:|---:|---:|---:|---:|
| 1 | 1/595.7 | 1/595.7 | 1/297.8 | 1/394.7 | 約1/169 |
| 3 | 1/550.7 | 1/550.7 | 1/275.3 | 1/366.1 | 約1/157 |
| 5 | 1/512.0 | 1/512.0 | 1/256.0 | 1/312.0 | 約1/141 |
| 7 | 1/500.2 | 1/500.2 | 1/250.1 | 1/267.4 | 約1/129 |

- 旧機種整理の詳細確率とK-NaviのBIG/MINT BONUS丸め値が一致。
- グリーンべると当時記事もBIG合算1/297（設定1）〜1/250（設定7）、MB 1/394〜1/267、全ボーナス合成1/169〜1/129とする。

信頼度: INDUSTRY_HIGH + ANALYSIS_HIGH

## baseGamesPer50

- 1000円あたり約32〜33G。
- グリーンべると2007-08-31当時記事。

信頼度: INDUSTRY_HIGH

## netIncrease

ART「スーパーミントタイム」:
- 1セット150G
- 約+0.4枚/G
- 150G完走時の増加見込み約60枚
- ボーナス成立または150G消化で終了

信頼度: OFFICIAL + INDUSTRY_HIGH

## basicPayout

- 赤7 BIG: 345枚超払い出し終了 / 純増約308枚
- 青7 BIG: 285枚超払い出し終了 / 純増約256枚
- MINT BONUS: 119枚超払い出し、またはMINT CHANCE当選で終了 / 平均約100枚

NET公式の払い出し条件と、2007年当時グリーンべるとの純増値を分けて保持。

信頼度: OFFICIAL + INDUSTRY_HIGH

## modeSpecificMinimumData

### MINT CHANCE → スーパーミントタイム

- 通常時ハット（シングル役、当時記事で約1/100）後に1Gの「MINT CHANCE」へ。
- MINT CHANCE中に「青7・リプ・リプ」1枚役が入賞するとART「スーパーミントタイム」へ突入。
- 当時業界記事ではMINT CHANCE中の同1枚役は約1/6。
- ARTは150Gまたはボーナス成立まで。

### 物差し上の位置づけ

- 2007年のボーナス+ART型。
- 1G自力CZから150G・約+0.4枚/GのARTへ入る構造。
- 通常時全小役同時当選率、詳細15枚役判別、CZ内部の細かな抽選など実機完全再現用解析は本DB対象外。

## resetBehavior

resetBehaviorQA: PARTIAL

`ドリスタ / ドリスタA1 / ミントのヒロイン救出大作戦 / NET / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ミントチャンス / スーパーミントタイム / ガックン` を組み替え、公式・当時業界記事・旧攻略/機種DB・回顧資料を横断して再探索。

### settingChangeBehavior

- 設定変更時にMINT CHANCE、スーパーミントタイム残G・内部RT/ART状態をどう処理するか: UNVERIFIED。
- 設定変更専用の通常時ゲーム数モード/朝一専用モード: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時のMINT CHANCE/ART状態・ART残G引継ぎ: UNVERIFIED。
- 通常時ゲーム数天井の据え置き引継ぎ: NOT_APPLICABLE / NONE_CONFIRMED。

### powerCycleBehavior

- 電源OFF→ONのみでMINT CHANCE/ART内部状態・ART残Gを維持するか: UNVERIFIED。
- 設定変更挙動から電断挙動を推定転記しない。

### gameCounterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- 天井用通常時ゲームカウンタ: NOT_APPLICABLE / NONE_CONFIRMED。
- ART残Gの設定変更時処理: UNVERIFIED。

### ceilingAfterReset

- 通常時天井: NONE_CONFIRMED。
- リセット専用短縮天井: NONE_CONFIRMED。

### modeAfterReset

- 朝一専用モード、設定変更時専用モード再抽選: NONE_CONFIRMED。
- MINT CHANCE/ART状態の設定変更時処理: UNVERIFIED。

### stateAfterReset

- MINT CHANCE / スーパーミントタイムの設定変更・据え置き・電断時状態処理: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機・有利区間制度導入前）。

### resetBenefits

- 設定変更専用短縮天井、朝一ART/CZ優遇、設定変更専用初当たり優遇: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のガックン、出目、液晶状態等による設定変更/据え置き判別: 十分再探索後もUNVERIFIED。
- 通常時15枚役出現には設定差があるとの当時攻略情報があるが、これは遊技中の設定推測材料でありリセット判別とは分離する。

### numericResetData

- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- リセット後短縮天井G数: NONE_CONFIRMED / NOT_APPLICABLE

## sources

取得日: 2026-09-01

1. NET公式 — ドリスタ -ミントのヒロイン救出大作戦-
   - https://www.net-fun.co.jp/dresta/
   - 製品公式、スーパーミントタイム、ボーナス構成。
   - reliability: OFFICIAL
2. NET公式 — ボーナスページ
   - https://www.net-fun.co.jp/dresta/index05.html
   - 赤7 345枚超、青7 285枚超、MINT BONUS 119枚超またはMINT CHANCE当選で終了。
   - reliability: OFFICIAL
3. グリーンべると — ネットがミント主役の『ドリスタ』を発表（2007-08-31）
   - https://web-greenbelt.jp/00004270/
   - 納品9月24日開始予定、ART150G・約+0.4枚/G、150G完走約60枚、BIG/MB確率両端、1000円32〜33G、赤7約308枚/青7約256枚/MB平均100枚。
   - reliability: INDUSTRY_HIGH
4. K-Navi — ドリスタ
   - https://p-kn.com/slot/645/
   - BIG合算1/297〜1/250、MINT BONUS1/394〜1/267、機械割98〜108%。
   - reliability: ANALYSIS_HIGH
5. pachinko’s blog — ネット「ドリスタ」筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/09/dream-star
   - 型式名ドリスタA1、赤/青BIG詳細、MB詳細、出玉率95.0〜108.0%。
   - reliability: RETROSPECTIVE_ANALYSIS
6. P-WORLD — ドリスタ
   - https://www.p-world.co.jp/machine/database/4888
   - 種別パチスロ、型式名ドリスタA1。
   - reliability: INDUSTRY_DB
7. 5号機まとめwiki — ドリスタ
   - https://w.atwiki.jp/5gouki/pages/108.html
   - 2008年時点整理。ART150G、設定判別要素等を補助参照。
   - reliability: OLD_COMMUNITY_DB
8. 5号機クロニクル — NET
   - https://5goki.com/net
   - 機械割98.1〜110.8%を競合比較。ゲーム性説明に公式/当時記事との不整合があるためコアには不採用。
   - reliability: SECONDARY_CONFLICTING

## missingFields

- 機械割CONFLICTの算出条件差の完全解消
- 設定変更時のMINT CHANCE/ART状態・ART残G処理
- 据え置き時のCZ/ART状態・残G引継ぎ
- 電源OFF→ON時のCZ/ART状態・残G処理
- 本機固有の設定変更判別（ガックン/出目/液晶等）
- 公開朝一専用数値

## conflicts

- 機械割: K-Navi 98/100/104/108% vs 旧機種整理95.0/98.4/102.8/108.0% vs 5号機クロニクル98.1/101.6/106.0/110.8%。平均せずCONFLICT。
- 5号機クロニクルの本機ゲーム性・獲得枚数記述はNET公式/2007年当時業界記事と明確に整合しないため、機械割の補助比較以外へ自動採用しない。
