# マジカルハロウィン

machineName: マジカルハロウィン
manufacturer: KPE
releaseDate: 2007-07-23
generation: 5号機初期
systemType: ボーナス + RT/ART（カボチャレンジ / カボチャンス）
coreStatus: PARTIAL
qaResetBehavior: PARTIAL

## releaseDateEvidence
- ALL7.jpの2007年7月導入予定一覧でKPE `マジカルハロウィン` を `2007-07-23` と確認。
- コナミ公式「まじおつ◎」でも初代マジカルハロウィンの稼働日を7月23日と回顧。
- 5号機クロニクルも2007/7導入として整合。

信頼度: OFFICIAL + ANALYSIS_HIGH

## payoutRateBySetting
K-Navi:
- 設定1 95.0%
- 設定2 98.0%
- 設定3 102.0%
- 設定4 107.0%
- 設定5 112.0%
- 設定6 118.0%

5号機まとめwiki（2008年更新）:
- 設定1 95.6%
- 設定2 98.5%
- 設定3 102.7%
- 設定4 107.3%
- 設定5 112.6%
- 設定6 118.4%

5号機クロニクル:
- 設定1 95.6%
- 設定2 98.5%
- 設定3 102.7%
- 設定4 107.3%
- 設定5 112.6%
- 設定6 118.3%

資料差が丸めだけでは説明しきれない設定もあるため平均せず `CONFLICT` として保持。
信頼度: CONFLICT

## initialHitBySetting
K-Navi:
| 設定 | BIG | REG/ボーナスゲーム | 合成 |
|---|---:|---:|---:|
| 1 | 1/297.89 | 1/387.79 | 1/168.47 |
| 2 | 1/297.89 | 1/383.25 | 1/167.61 |
| 3 | 1/297.89 | 1/378.82 | 1/166.76 |
| 4 | 1/297.89 | 1/374.49 | 1/165.91 |
| 5 | 1/297.89 | 1/370.26 | 1/165.08 |
| 6 | 1/297.89 | 1/366.12 | 1/164.25 |

5号機まとめwikiの丸め値（BIG 1/298、REG 1/388→1/366、合成1/169→1/164）と整合。
信頼度: ANALYSIS_HIGH

## baseGamesPer50
- `マジカルハロウィン / 初代マジハロ / マジカルハロウィンJC / 50枚 / 1000円 / ベース / コイン持ち / 1k` を組み替え、K-Navi、当時まとめwiki、業界記事、回顧資料、古い個人資料まで再探索。
- 比較可能な50枚あたりゲーム数は今回確定できず `UNVERIFIED`。

## netIncrease
- ART「カボチャンス」純増は、2007年当時グリーンべると記事で約0.7枚/G。
- コナミ公式2020年回顧では初代を `A+ART 純増0.65枚` と記載。
- 定義/丸め差の可能性があるため両方保持し、平均しない。
- RT「カボチャレンジ」はK-Naviで約0.2枚/G。

信頼度: OFFICIAL + INDUSTRY

## basicPayout
- K-Navi: BIGは253枚超払い出し終了、ボーナスゲームは69枚超払い出し終了。
- 当時2007-07-23の個人資料では純増目安 BIG約208枚 / REG約56枚。
- 後年回顧資料でもBIG約208枚 / REG約56枚の記載あり。
- 払い出し終了条件と純増目安は定義を分けて保持。

信頼度: ANALYSIS_HIGH（払い出し条件） / ANALYSIS_SINGLE（純増目安）

## modeSpecificMinimumData
- 全ボーナス後はRT「カボチャレンジ」へ突入。
- カボチャレンジ中はART「カボチャンス」への昇格抽選があり、K-Naviではスイカ成立時の約1/3で昇格と記載。
- ART「カボチャンス」はゲーム数上乗せ型。旧解析では獲得時の基本最小50G、100/150/200/300/500/1000G振り分けの存在を確認。
- 「スーパーカボチャンス」も搭載。
- 通常時ゲーム数天井は当時主要攻略ページ・旧まとめwikiで確認できず `NONE_CONFIRMED`。
- 有利区間制度導入前。

## resetBehavior
resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `マジカルハロウィン / 初代マジハロ / マジカルハロウィンJC / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / カボチャレンジ / カボチャンス / ガックン` を組み替え、公式回顧、業界記事、K-Navi、当時wiki、古いDB・回顧資料を横断。
- 設定変更時にARTストック、RT状態、カボチャンス残G、高確状態をどう処理するかは高信頼な本機固有資料で確定できず `UNVERIFIED`。

carryOverBehavior:
- 据え置き時のARTストック / RT状態 / カボチャンス残G / 高確状態の本機固有引継ぎ仕様は `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみでのARTストック / RT状態 / 残G / 高確状態の本機固有挙動は `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井は `NONE_CONFIRMED`。天井ゲーム数カウンタの比較項目は `NOT_APPLICABLE` 寄り。
- ARTゲーム数/ストックの設定変更・電断処理は `UNVERIFIED`。

ceilingAfterReset:
- リセット短縮天井・朝一天井は `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、設定変更専用モード振り分けは `NONE_CONFIRMED`。

stateAfterReset:
- 設定変更時の高確/RT/ART内部状態の再抽選・引継ぎは `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（有利区間制度導入前）。

resetBenefits:
- 設定変更固有の主要朝一恩恵は、十分再探索後も `NONE_CONFIRMED`。

resetPenalties:
- 設定変更固有の主要不利要素は `NONE_CONFIRMED`。

resetDetection:
- 初代固有のガックン、出目、液晶状態等による設定変更/据え置き判別は十分再探索後も `UNVERIFIED`。

numericResetData:
- 朝一ART/CZ突入率、変更時モード振り分け、短縮G数等の公開朝一数値は `UNVERIFIED`。

## sources
取得日: 2026-08-31

1. ALL7.jp — 2007年7月導入予定一覧
   - https://www.all7.jp/plans/index/2007/07
   - KPE `マジカルハロウィン`、導入予定2007-07-23
   - reliability: ANALYSIS_HIGH
2. コナミアミューズメント公式「まじおつ◎」2020-07-31
   - https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20200731.html
   - 初代稼働日7月23日、A+ART、純増0.65枚
   - reliability: OFFICIAL
3. グリーンべると / P-WORLD業界ニュース 2007-08-24
   - https://news.p-world.co.jp/articles/2345/greenbelt
   - 7月から設置、カボチャンス/スーパーカボチャンス、ART純増0.7枚/G
   - reliability: INDUSTRY
4. K-Navi — マジカルハロウィン
   - https://p-kn.com/slot/620/
   - 設定別BIG/ボーナスゲーム/合算、機械割、払い出し終了条件、全ボーナス後カボチャレンジ
   - reliability: ANALYSIS_HIGH
5. K-Navi — カボチャンス
   - https://p-kn.com/slot/620/3736/
   - カボチャレンジ約0.2枚/G、ART構造
   - reliability: ANALYSIS_HIGH
6. パチスロ5号機まとめwiki — マジカルハロウィン（最終更新2008-03-18）
   - https://w.atwiki.jp/5gouki/pages/67.html
   - 設定別ボーナス確率/機械割、ART関連解析
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — KPE全機種
   - https://5goki.com/kpe
   - 2007/7、設定別機械割
   - reliability: RETROSPECTIVE_SUPPORT
8. あみゅのスロット談話室 — 2007-07-23当時記録
   - https://plaza.rakuten.co.jp/slotamyu/diary/
   - 設置予定日、BIG純増208枚/REG56枚、ボーナス後RT概要
   - reliability: ANALYSIS_SINGLE

## missingFields
- 50枚あたりゲーム数/ベース
- 設定変更時のARTストック・RT/ART状態・残G・高確状態処理
- 据え置き/電源OFF→ON時の本機固有引継ぎ
- 本機固有の変更判別（ガックン等）
- 公開朝一数値

## conflicts
- 機械割: K-Navi `95.0/98.0/102.0/107.0/112.0/118.0%` vs 旧まとめwiki `95.6/98.5/102.7/107.3/112.6/118.4%` vs 5号機クロニクル `95.6/98.5/102.7/107.3/112.6/118.3%`。平均せず保持。
- ART純増: コナミ公式回顧 `0.65枚/G` vs 当時業界記事 `0.7枚/G`。丸め/表記精度差の可能性はあるが平均せず保持。

## notes
- 型式名 `マジカルハロウィンJC` は後年資料で確認されるが、今回の主要一次/当時資料では型式名そのものの強い照合が不足するため参考扱い。
- 後継 `マジカルハロウィンR`、`2`以降の天井・リセット仕様を初代へ混入させない。
