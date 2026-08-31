# 南国姉妹-30

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: 南国姉妹-30
manufacturer: アスワン東京
releaseDate: 2007-09 / 2007-10 (CONFLICT)
generation: 5号機初期
systemType: A+RT / ボーナス+固定G数RT / 30Φ / 完全告知系

## releaseDate evidence

- pacnk 2007年度一覧は `南国姉妹-30(アスワン東京)` を **2007年9月**群に掲載。
- スロリスクタイムの5号機一覧、同サイト「な行」一覧、後年の2007年回顧年表は **2007年10月**として掲載。
- 2007-08-11更新のslothistoryでは `南国姉妹-30` が5号機・検定通過/発売確定側へ移動している一方、2007-12-28更新には再び未確定欄の記述もあり、当時資料だけで実納品月を一意に確定できない。
- 平均・推定せず `2007-09 / 2007-10 CONFLICT` として保持する。

信頼度: CONFLICT

## payoutRateBySetting

- K-Naviの当時機種ページは設定1〜6の機械割をすべて `未発表` と掲載。
- `南国姉妹-30 / 南国姉妹30 / アスワン東京 / 南国姉妹` と `機械割 / 出玉率 / PAYOUT / 設定1 / 設定6 / スペック` を組み替え、P-WORLD、K-Navi、pacnk、slothistory、5号機一覧、旧DB/回顧資料を横断したが、30Φ固有の設定別機械割を確定できず `UNVERIFIED`。
- 25Φ同名機または類似南国シリーズの値を自動流用しない。

信頼度: UNVERIFIED

## initialHitBySetting

- K-Naviの当時機種ページは設定1〜6のBIG/REG欄を `未発表` と掲載。
- 設定別BIG/CHALLENGE BONUS確率は、表記揺れ・項目名・資料系統を変えて再探索したが30Φ固有値を確定できず `UNVERIFIED`。
- 25Φ版の数値との同一性能確認がないため転記しない。

信頼度: UNVERIFIED

## baseGamesPer50

- `50枚 / 1000円 / コイン持ち / ベース / 通常時ゲーム数` を含め再探索したが、30Φ固有の比較可能な数値を確定できず `UNVERIFIED`。

信頼度: UNVERIFIED

## netIncrease

- RT `スーパーウェーブタイム(SWT)` を搭載。
- K-NaviはSWT中について「コインの持ちが通常よりも大幅にアップ」と説明するが、比較可能な純増枚数/Gは公開値を確定できず `UNVERIFIED`。
- 赤7後SWTでのボーナスGET率はK-Naviが `80%強` と記載。ただしこれはRT純増ではなくRT中のボーナス当選期待に関する値として定義を分離して保持する。

信頼度: ANALYSIS_SINGLE

## basicPayout

P-WORLD / K-Navi:
- 赤7 BIG: 348枚を超える払い出しで終了。RT200G付与。
- 青7 BIG: 348枚を超える払い出しで終了。P-WORLDはRT100G、K-Navi表示ではRT200Gと読めるため **RTゲーム数にCONFLICT**。
- CHALLENGE BONUS: 132枚を超える払い出しで終了。K-NaviはRT100G付与と掲載。
- 払い出し終了条件は確認できるが、実純増枚数は今回確定できず `UNVERIFIED`。

信頼度: ANALYSIS_HIGH / CONFLICT

## modeSpecificMinimumData

- 30Φの完全告知系。ハイビスカスランプ点滅でボーナス確定。
- RT `スーパーウェーブタイム(SWT)` を搭載。
- K-Naviでは赤7後SWTのボーナスGET率 `80%強`。
- P-WORLD掲示板には1000G/1300〜1400Gの「天井」情報が見られるが、掲示板投稿であり、正規仕様か裏基板/改造機由来かを判別できないため本線の天井値には採用しない。
- slothistoryの2007年12月更新「5号機・天井存在機種一覧」に南国姉妹/-30は掲載されず、通常時ゲーム数天井は `NONE_CONFIRMED` とする。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `南国姉妹-30 / 南国姉妹30 / アスワン東京 / 南国姉妹` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / 天井短縮 / モード / SWT / RT残り / 変更判別` を組み替え、K-Navi、P-WORLD、pacnk、slothistory、旧DB/回顧資料を横断。
- 設定変更時の専用モード、専用RT、短縮天井、朝一恩恵を示す直接資料は確認できず `NONE_CONFIRMED`。
- SWT中に設定変更した場合のRT残G/内部RT状態処理は本機固有の直接資料を確定できず `UNVERIFIED`。

carryOverBehavior:
- 通常時ゲーム数天井は `NONE_CONFIRMED` のため宵越し天井G数の対象は確認できない。
- SWT中の据え置き時RT残G/内部状態の扱いは `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみで通常時天井・モードに影響する直接資料は `NONE_CONFIRMED`。
- SWT中の電断復帰時RT残G/内部状態の扱いは `UNVERIFIED`。

gameCounterReset:
- 正規仕様としての通常時ゲーム数天井を確認できていないため `NONE_CONFIRMED`。
- 掲示板由来の1000G/1300〜1400G情報は根拠不足で採用しない。

ceilingAfterReset:
- リセット専用短縮天井: `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、設定変更専用モード、公開モード振り分け: `NONE_CONFIRMED`。

stateAfterReset:
- SWT中の設定変更/据え置き/電断時状態処理: `UNVERIFIED`。
- その他、朝一客行動に影響する公開内部状態再抽選: `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- リセット短縮天井、設定変更専用RT/CZ、朝一当選率優遇等: `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の公開不利要素: `NONE_CONFIRMED`。

resetDetection:
- 本機固有のガックン、初期出目、告知ランプ、RT表示等による設定変更/据え置き判別は、検索語と資料系統を変えて再探索したが高信頼資料を確定できず `UNVERIFIED`。

numericResetData:
- リセット短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. K-Navi — 南国姉妹-30
   - https://p-kn.com/slot/655/
   - アスワン東京、完全告知、設定別BIG/REG/機械割は未発表、BIG348枚超、CB132枚超、SWT、赤7後SWTのボーナスGET率80%強。
   - reliability: ANALYSIS_HIGH
2. P-WORLD — 南国姉妹-30
   - https://www.p-world.co.jp/machine/database/4949
   - パチスロ機種確認、赤7BIG348枚超+RT200、青7BIG348枚超+RT100、CHALLENGE BONUS132枚超。
   - reliability: INDUSTRY_DB / ANALYSIS_HIGH
3. pacnk — 2007年度機種一覧
   - https://pacnk.com/photoslot/plist2007_0_0.html
   - 南国姉妹-30を2007年9月群に掲載。
   - reliability: SECONDARY_DB
4. pacnk — 「な」から始まる機種一覧
   - https://pacnk.com/slot/s/mlist_na.html
   - 南国姉妹-30を2007.10として掲載、設定判別ツール未載。
   - reliability: SECONDARY_DB
5. スロリスクタイム — 5号機一覧
   - https://pachisuro100.com/itiran/
   - 南国姉妹-30 / A+RT / アスワン東京 / 2007/10。
   - reliability: SECONDARY_DB
6. slothistory — パチスロ業界初まとめ 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 2007-08-11時点の検定通過・発売確定側への移動、2007-12-28更新の未確定欄記述、天井存在機種一覧を確認。
   - reliability: ARCHIVE / HISTORICAL

## missingFields

- 30Φ固有の設定別機械割
- 30Φ固有の設定別BIG/CHALLENGE BONUS確率
- 50枚ベース
- ボーナス実純増枚数
- SWT純増/G
- 青7BIG後RTゲーム数の確定（100G/200G CONFLICT）
- 実納品/実導入月の確定（2007-09/10 CONFLICT）
- SWT中の設定変更/据え置き/電断処理
- 本機固有の設定変更判別要素

## conflicts

- releaseDate: pacnk年度一覧 `2007年9月` vs pacnk頭文字一覧/スロリスクタイム/後年回顧 `2007年10月`。
- 青7BIG後RT: P-WORLD `100G` vs K-Navi画面表示 `200G`。
- P-WORLD掲示板の1000G/1300〜1400G天井情報は正規仕様と確認できず、裏基板/改造機情報混在の可能性があるため採用しない。

## notes

- LATEST_HANDOFF 186件地点で9月漏れ候補として明示され、main独立レコードが存在しなかったため新規追加。
- 性能コア欠損は最初の検索で打ち切らず、表記揺れ・メーカー名・設定項目・リセット語を組み替えて複数資料系統を再探索済み。
- 25Φ同名機または他の南国シリーズの性能を、同一性能確認なしに流用しない。
