# しぇんしぇーのスロットマシーン30

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: しぇんしぇーのスロットマシーン30
manufacturer: トリビー
releaseDate: 2007-08-06（沖縄先行） / 2007-09上旬（全国販売）
generation: 5号機初期
systemType: A+RT / ボーナス+固定100G RT / 30Φ / 完全告知 / 5段階設定（設定2〜6）

## releaseDate evidence

- PachinkoVistaは「トリビー／2007年8月導入開始」と掲載し、沖縄県公安委員会検定通過状況（2007-06-29付）も併記。
- 当時ブログ資料は「設置予定日2007/8月・沖縄地域限定発売」。
- slothistory 2007-08-11更新は「8/6に沖縄限定発売されてたが、全国販売が決定」「2007/9/上発売」と記録。
- 5号機クロニクルも導入時期を2007/8として整理。
- 本DBでは最初の市場導入を優先し `2007-08-06` を主日付とし、全国販売 `2007-09上旬` を併記する。9月監査で発見した遡及漏れとして登録。

信頼度: ANALYSIS_HIGH / HISTORICAL

## payoutRateBySetting

PachinkoVista / 5号機クロニクルで一致:
- 設定2: 94.0%
- 設定3: 97.0%
- 設定4: 100.0%
- 設定5: 105.0%
- 設定6: 108.0%

設定1は存在せず、設定2〜6の5段階設定。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

PachinkoVista:

| 設定 | BIG | BABY/REG | 合成 |
|---:|---:|---:|---:|
| 2 | 1/327.2 | 1/678.3 | 1/220.7 |
| 3 | 1/302.8 | 1/608.5 | 1/220.2 |
| 4 | 1/292.0 | 1/525.1 | 1/187.6 |
| 5 | 1/271.3 | 1/412.1 | 1/163.6 |
| 6 | 1/258.4 | 1/422.8 | 1/160.4 |

- 当時ブログ資料の「合成1/160〜1/220」と整合。
- BIGは赤7系/青7系を含むBIG合算として扱う。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ（スイカ・チェリー取りこぼしで算出）:
- 設定2: 35.94G/50枚
- 設定3: 36.07G/50枚
- 設定4: 36.17G/50枚
- 設定5: 36.66G/50枚
- 設定6: 37.24G/50枚

信頼度: ANALYSIS_HIGH

## netIncrease

- 赤7BIG後に100GのRT `しぇんしぇーたいむ` へ突入。
- RTが100G固定であることはPachinkoVista、パチマガスロマガ、当時ブログで一致。
- RT中の比較可能な純増枚数/Gは `しぇんしぇーのスロットマシーン30 / シェンシェ-30 / しぇんしぇーたいむ / RT / 純増 / 増加枚数` で資料系統を変えて再探索したが確定できず `UNVERIFIED`。

信頼度: ANALYSIS_HIGH / UNVERIFIED

## basicPayout

パチマガスロマガ:
- BIG: 345枚を超える払い出しで終了、純増約290枚。
- BABY: 180枚を超える払い出しで終了、純増約140枚。

PachinkoVistaもBIG 345枚超、BABY 180枚超の払い出し終了条件を確認。
当時ブログではBIGが2種類、REG/BABYが1種類と説明。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 完全告知 / 同時成立あり / 中段・斜めのみ有効の3ライン機。
- 設定2〜6の5段階設定で、設定1なし。
- 赤7BIG後のみ100G固定RT `しぇんしぇーたいむ`。
- 通常時ゲーム数天井、CZ、ART/ATは確認していない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `しぇんしぇーのスロットマシーン30 / シェンシェ-30 / トリビー / しぇんしぇーたいむ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / 天井短縮 / モード / RT残り / 変更判別` を組み替え、パチマガスロマガ、PachinkoVista、slothistory、当時ブログ、旧DB/回顧資料を横断。
- 設定変更時の専用モード、短縮天井、朝一専用恩恵を示す公開資料は `NONE_CONFIRMED`。
- RT中に設定変更した場合のRT残G/内部RT状態処理は本機固有の直接資料を確定できず `UNVERIFIED`。

carryOverBehavior:
- 通常時ゲーム数天井は `NONE_CONFIRMED` のため宵越し天井の対象は確認できない。
- RT中据え置き時の残G/内部RT状態の扱いは `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみで通常時モード/ゲーム数に固有変化がある公開資料は `NONE_CONFIRMED`。
- RT中の電断復帰時に残Gを保持するかは本機固有資料を確定できず `UNVERIFIED`。

gameCounterReset:
- 正規仕様として通常時ゲーム数天井を確認できず `NONE_CONFIRMED`。

ceilingAfterReset:
- リセット専用短縮天井: `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、設定変更専用モード、公開モード振り分け: `NONE_CONFIRMED`。

stateAfterReset:
- 通常時に朝一客行動へ影響する公開内部状態再抽選: `NONE_CONFIRMED`。
- `しぇんしぇーたいむ` 中の設定変更/据え置き/電断時状態処理: `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 短縮天井、朝一専用RT/CZ、リセット時当選率優遇等: `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の公開不利要素: `NONE_CONFIRMED`。

resetDetection:
- 本機固有のガックン、初期出目、告知状態等による設定変更/据え置き判別は、検索語と資料系統を変えて再探索したが直接根拠を確定できず `UNVERIFIED`。

numericResetData:
- リセット短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. PachinkoVista — しぇんしぇーのスロットマシーン３０
   - https://www.pachinkovista.com/pfactory/model.php?km=2&nid=016696
   - トリビー、2007年8月導入開始、5号機RT、設定2〜6、設定別BIG/REG/合成/機械割、BIG345枚超、BABY180枚超、赤7BIG後100G RT。
   - reliability: ANALYSIS_HIGH / HISTORICAL
2. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/08/a.php
   - 完全告知、同時成立、RT、3ライン、5段階設定、赤7BIG後100G RT、BIG約290枚/BABY約140枚。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 小役確率/1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/08/c.php
   - 設定2〜6の50枚ベース35.94〜37.24G。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — トリビー5号機一覧
   - https://5goki.com/trivy
   - しぇんしぇーのスロットマシーン30を2007/8導入、設定2〜6の機械割94/97/100/105/108%。
   - reliability: SECONDARY_DB
5. slothistory — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 2007-08-11更新で8/6沖縄限定発売済み、全国2007/9上旬発売予定を記録。5段階設定（設定2〜6）の業界初整理も確認。
   - reliability: ARCHIVE / HISTORICAL
6. あみゅのスロット談話室 — 当時記事
   - https://plaza.rakuten.co.jp/slotamyu/diary/
   - 2007年8月沖縄限定、合成1/160〜1/220、機械割94〜108%、設定2〜6、BIG2種/BABY1種、赤7BIG後100G RT。
   - reliability: HISTORICAL_SECONDARY

## missingFields

- RT `しぇんしぇーたいむ` の比較可能な純増枚数/G
- RT中の設定変更/据え置き/電断時残G・内部状態処理
- 本機固有の設定変更判別要素（ガックン等）

## conflicts

- 主要性能コアに数値CONFLICTなし。
- releaseDateは矛盾というより販売段階差。沖縄先行 `2007-08-06`、全国販売 `2007-09上旬` を定義分離して保持。

## notes

- 9月漏れ監査中に発見した遡及漏れ。全国販売が9月上旬のため9月資料にも現れるが、沖縄先行導入は2007-08-06で確認できる。
- LATEST_HANDOFF 187件地点でmain独立レコードが存在しなかったため188件目として追加。
- 性能コアは設定別機械割、設定別BIG/REG/合算、50枚ベース、基本獲得性能、RT基本仕様まで取得できたため `COMPLETE_CORE`。
- resetBehaviorは十分再探索後もRT中の変更/据え置き/電断処理と変更判別が未確定のため `PARTIAL`。
