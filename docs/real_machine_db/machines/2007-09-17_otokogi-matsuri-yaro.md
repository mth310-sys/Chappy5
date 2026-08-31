# 男気!祭野郎

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: 男気!祭野郎
manufacturer: 藤興
releaseDate: 2007-09-17
generation: 5号機
systemType: ボーナス + RT / ART（RT延命・残RTのART化）

## releaseDate evidence

- グリーンべるとの2007-09-21業界記事で、兵庫県から先行導入後、**2007-09-17から本格納品開始**と明記。
- 5号機クロニクルでも2007年9月導入機として掲載。
- 本DBでは具体的な本格納品開始日 `2007-09-17` を releaseDate とする。

信頼度: INDUSTRY

## payoutRateBySetting

情報源間で数値差があるため平均せず `CONFLICT`。

### パチマガスロマガ当時解析（シミュレート値）

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.76% |
| 2 | 99.22% |
| 3 | 101.41% |
| 4 | 103.64% |
| 5 | 105.79% |
| 6 | 108.37% |

### 5号機クロニクル / 2008年当時個人整理資料

| 設定 | 機械割 |
|---|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 110.0% |

- 両系列で設定別ボーナス確率はほぼ一致する一方、機械割は最大約1.6pt差がある。
- 定義/算出条件の違いが確認できないため、どちらかへ寄せず双方を保持する。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ当時解析:

| 設定 | 赤BIG | 青BIG | REG | BIG合成 | ボーナス合成 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/992.97 | 1/992.97 | 1/655.36 | 1/496.48 | 1/282.48 |
| 2 | 1/910.22 | 1/936.23 | 1/682.67 | 1/461.52 | 1/275.36 |
| 3 | 1/840.21 | 1/885.62 | 1/712.35 | 1/431.16 | 1/268.59 |
| 4 | 1/789.59 | 1/829.57 | 1/744.73 | 1/404.54 | 1/262.14 |
| 5 | 1/736.36 | 1/789.59 | 1/771.01 | 1/381.02 | 1/255.00 |
| 6 | 1/689.85 | 1/744.73 | 1/771.01 | 1/358.12 | 1/244.54 |

- グリーンべると当時業界記事のボーナス合成 `約1/283（設定1）〜約1/245（設定6）` と両端が一致。
- 2008年当時個人整理資料も設定別赤BIG/青BIG/REG/合成を丸め値で同一系列として掲載。

信頼度: ANALYSIS_HIGH / INDUSTRY_CORROBORATED

## baseGamesPer50

パチマガスロマガ当時解析:

- 全設定共通: **36.56G / 1000円**
- 注記: チェリー後1G RTを考慮しない数値。

本DBでは比較可能な50枚ベースとして `36.56G` を保持し、算出条件注記も残す。

信頼度: ANALYSIS_HIGH

## netIncrease

グリーンべると当時業界記事:

- RT「男気タイム」: 約 **+0.5枚/G**
- ART「スーパー男気タイム」: 約 **+0.8枚/G**

- 男気タイムは最大500G。
- 男気タイム中にボーナスへ当選すると、残りRTゲーム数がスーパー男気タイム（ART）へ移行。
- ART中は成立チェリーを全ナビし、チェリー入賞でもRTが終了しない仕様。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout

グリーンべると / パチマガスロマガ / P-WORLDを照合:

- 赤7BIG / 青7BIG: 実獲得目安 約 **260枚**
- 赤7・赤7・青7ボーナス: 実獲得目安 約 **70枚**
- BIG規定払い出し: 390枚を超える払い出しで終了
- 小ボーナス規定払い出し: 100枚を超える払い出しで終了

実獲得目安と規定払い出し終了条件は定義を分けて保持する。

信頼度: INDUSTRY / ANALYSIS_HIGH / OLD_DB_CORROBORATED

## modeSpecificMinimumData

- RT「男気タイム」は最大500G。
- 3種類のチェリー入賞で男気タイム終了となるため、チェリー回避ナビでRTを延命するゲーム性。
- ボーナス中のミニゲーム結果等でRT中のチェリーナビを獲得。
- 白7揃い成立時は次回RTですべてのチェリーがナビされ、500G完走が容易になる。
- 男気タイム中のボーナス当選で、残りRTがART「スーパー男気タイム」へ昇格。
- 通常時ゲーム数天井・ボーナス間天井は今回確認されない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

### settingChangeBehavior

- `男気!祭野郎 / 男気祭野郎 / 藤興` と `設定変更 / リセット / 朝一 / 据え置き / 電源 / 天井 / RT / 男気タイム / スーパー男気タイム / ガックン` を組み替えて再探索。
- 設定変更時に男気タイム/スーパー男気タイムの内部RT状態、残りG、チェリーナビ権利を初期化・維持・再抽選するかを直接記した高信頼資料は確定できず `UNVERIFIED`。
- 設定変更専用の短縮天井、朝一専用優遇は `NONE_CONFIRMED`。

### carryOverBehavior

- 据え置き時の男気タイム/スーパー男気タイム残G、チェリーナビ権利の継続処理を本機固有資料で確定できず `UNVERIFIED`。
- 通常時ゲーム数天井が確認されないため、宵越し天井ゲーム数は `NOT_APPLICABLE / NONE_CONFIRMED`。

### powerCycleBehavior

- 電源OFF→ONのみでRT/ART状態・残G・ナビ権利を維持するか初期化するか、本機固有の直接資料は `UNVERIFIED`。
- 設定変更挙動からの推定転記はしない。

### gameCounterReset

- 通常時ゲーム数天井・ボーナス間天井: `NONE_CONFIRMED`。
- RT/ART残Gの設定変更・据え置き・電断処理は `UNVERIFIED`。

### ceilingAfterReset

- リセット専用短縮天井: `NONE_CONFIRMED`。
- 通常時天井自体も今回確認されない。

### modeAfterReset

- 朝一専用モード、設定変更専用モード振り分け: `NONE_CONFIRMED`。
- 男気タイム/スーパー男気タイムは通常遊技中のRT/ART状態であり、設定変更時処理は `UNVERIFIED`。

### stateAfterReset

- 男気タイム/スーパー男気タイム、残G、ナビ権利の設定変更・据え置き・電断時処理: `UNVERIFIED`。

### advantageousSectionReset

- `NOT_APPLICABLE`（5号機・有利区間制度導入前）。

### resetBenefits

- 朝一/設定変更専用の短縮、優遇モード、初当たり率上昇等の公開恩恵: `NONE_CONFIRMED`。

### resetPenalties

- 設定変更固有の公開不利要素: `NONE_CONFIRMED`。

### resetDetection

- 本機固有のリールガックン、出目、液晶/ランプ等で設定変更・据え置きを判別できる高信頼資料: `UNVERIFIED`。

### numericResetData

- 通常時天井: NONE_CONFIRMED
- リセット短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- RT/ART残Gリセット値: UNVERIFIED

## sources

取得日: 2026-08-31

1. グリーンべると — 藤興が5号機第一弾『男気！祭野郎』を発表（2007-09-21）
   - https://web-greenbelt.jp/00006442/
   - 9月17日本格納品、RT最大500G、RT約+0.5枚/G、SOT約+0.8枚/G、BIG約260枚、小ボーナス約70枚、合成約1/283〜1/245。
   - reliability: INDUSTRY
2. パチマガスロマガ — 男気!祭野郎 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fujikou_slot/01/a.php
   - ART/RT延命、最大500G、実獲得目安、規定払い出し。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 男気!祭野郎 ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fujikou_slot/01/h.php
   - 設定別赤BIG/青BIG/REG/BIG合成/全合成、シミュレートPAYOUT。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 男気!祭野郎 小役確率・1000円ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fujikou_slot/01/c.php
   - 1000円36.56G（チェリー後RT非考慮）。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 男気!祭野郎 BIG中の打ち方
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fujikou_slot/01/e.php
   - 赤7BIG中ミニゲーム、白7揃い時の次回RT全チェリーナビ。
   - reliability: ANALYSIS_HIGH
6. P-WORLD — 男気!祭野郎
   - https://www.p-world.co.jp/machine/database/4908
   - パチスロ種別、390枚超/100枚超の規定払い出し終了条件。
   - reliability: OLD_DB
7. 5号機クロニクル — その他メーカー5号機全機種一覧
   - https://5goki.com/others
   - 2007/9、藤興、機械割96.0/98.0/100.0/104.0/107.0/110.0%。
   - reliability: RETROSPECTIVE_DB
8. スロ板blog — 男気！祭り野郎AR（2008-02-07）
   - https://slbl.blog.shinobi.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%EF%BC%9A%E3%81%82%E8%A1%8C/%E7%94%B7%E6%B0%97%EF%BC%81%E7%A5%AD%E3%82%8A%E9%87%8E%E9%83%8Ear
   - 当時整理として設定別ボーナス丸め値、機械割96〜110%、RT/ART挙動を補助照合。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時のRT/ART状態・残G・ナビ権利処理
- 据え置き時のRT/ART状態・残G・ナビ権利処理
- 電源OFF→ON時のRT/ART状態・残G・ナビ権利処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- 設定別機械割:
  - パチマガスロマガ シミュレート: 97.76 / 99.22 / 101.41 / 103.64 / 105.79 / 108.37%
  - 5号機クロニクル / 2008年当時整理: 96 / 98 / 100 / 104 / 107 / 110%
  - 算出条件差を確認できないため平均せず双方を保持。

## notes

- 藤興（旧大東音響）の5号機第1弾。
- 同日2007-09-17群は `ビーキッズクラブR`、`ツインビー`、`DECOICHI`、本機まで処理済み。
- 同日未処理は `KODA KUMI PACHISLOT LIVE IN HALL`。9月24日群へ進む前に同機を処理する。
