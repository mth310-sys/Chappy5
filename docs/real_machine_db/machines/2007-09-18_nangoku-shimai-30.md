# 南国姉妹-30

status: PARTIAL_WITH_CONFLICT
qaResetBehavior: PARTIAL

machineName: 南国姉妹-30
manufacturer: アスワン東京
releaseDate: CONFLICT（当時資料 2007-09-18発売 / 後年DB 2007-10導入）
generation: 5号機初期
systemType: A+RT / 完全告知 / 30φ

## releaseDate evidence

- パチスロ業界初まとめの2007-09-11更新は `南国姉妹/-30` を **2007/9/18発売** と記録。
- 同サイトの2007-10-01更新では、25φ版 `南国姉妹` を2007/10/01発売、**30φ版は9/18に発売済み** と明記している。
- PACNK 2007年度一覧は `南国姉妹-30` を **2007年9月** と整理。
- 一方、スロリスクタイムの後年DBは `南国姉妹-30` を **2007/10** と整理。
- 発売日と市場導入月の定義差で両立する可能性はあるが、平均・一本化せず `CONFLICT` として保持する。

信頼度: CONTEMPORARY_ARCHIVE / RETROSPECTIVE_DB / CONFLICT

## payoutRateBySetting

- `UNVERIFIED`。
- K-Naviの30φ専用ページは設定1〜6の機械割をすべて「未発表」としている。
- パチマガスロマガには25φ版 `南国姉妹` の詳細解析ページが現存するが、30φ版と同一性能であることを直接確認できる資料を今回確保できなかったため、別スペック流用防止ルールにより30φレコードへは転記しない。

信頼度: UNVERIFIED

## initialHitBySetting

- `UNVERIFIED`（30φ版の設定別BIG/CB確率）。
- K-Naviの30φ専用ページは設定別BIG/REG欄を「未発表」としている。
- 参考監査のみ: 25φ版 `南国姉妹` についてパチマガスロマガには以下の解析値があるが、30φ同一性能の直接確認がないため本レコードの性能値には採用しない。
  - BIG合成: 設定1 1/397.19 → 設定6 1/374.49
  - CB: 設定1 1/504.12 → 設定6 1/468.11
  - ボーナス合成: 設定1 1/222.16 → 設定6 1/208.05

信頼度: UNVERIFIED（30φ） / SIBLING_REFERENCE_ONLY（25φ）

## baseGamesPer50

- `UNVERIFIED`（30φ版）。
- 25φ版 `南国姉妹` のパチマガスロマガ解析では1000円あたり設定1 37.17G → 設定6 43.03Gが確認できるが、30φ版との同一性能を直接確定できないため転記しない。

信頼度: UNVERIFIED（30φ） / SIBLING_REFERENCE_ONLY（25φ）

## netIncrease

- RT「スーパーウェーブタイム（SWT）」搭載は30φ専用K-Naviで確認。
- RT中の比較可能な純増枚数/Gは、表記揺れ・SWT/RT/増加枚数/コイン持ち等を組み替えて再探索したが、30φ版固有の数値を確定できず `UNVERIFIED`。
- K-NaviはSWT中について「コインの持ちが通常よりも大幅にアップ」と説明し、赤7後SWT中のボーナスGET率を80%強としているが、これは純増枚数/Gではないため混同しない。

信頼度: ANALYSIS_SINGLE / UNVERIFIED_NUMERIC

## basicPayout

30φ版で直接確認できた払い出し終了条件:

- 赤7 BIG: 348枚を超える払い出しで終了。
- 青7 BIG: 348枚を超える払い出しで終了。
- CHALLENGE BONUS: 132枚を超える払い出しで終了。

K-NaviとP-WORLDで払い出し条件自体は整合する。

純増の実獲得目安については30φ版固有の直接数値を確定できない。25φ版パチマガスロマガにはBIG約300枚、REG/CB約120枚の記述があるが、30φ同一性能確認がないため参考値に留める。

信頼度: ANALYSIS_HIGH（払い出し条件） / UNVERIFIED（30φ純増実獲得）

## modeSpecificMinimumData

- 完全告知。ハイビスカスランプ点滅でボーナス確定。
- RT「スーパーウェーブタイム（SWT）」搭載。
- 赤7後SWT中のボーナスGET率はK-Naviで80%強と説明。
- RTゲーム数は資料競合のため下記の通り `CONFLICT`。
- 通常時ゲーム数天井について、P-WORLD掲示板にはユーザー投稿として1000G版/1300〜1400G版という話題があるが、裏物・改造基板の存在が後年回顧でも語られる機種であり、正規30φ仕様の解析根拠として採用しない。メーカー/業界/攻略解析で正規仕様の天井を確定できなかったため `NONE_CONFIRMED`。
- 有利区間制度導入前。

### RT length CONFLICT

K-Navi（30φ専用）:
- 赤7 BIG: +RT 200G
- 青7 BIG: +RT 200G
- CHALLENGE BONUS: +RT 100G

P-WORLD（30φ専用）:
- 赤7 BIG: +RT 200G
- 青7 BIG: +RT 100G
- CHALLENGE BONUS: RT付与の記載なし

パチマガスロマガ（25φ `南国姉妹`）:
- BIG後RTは最大200Gとだけ確認できるため、30φの色別/CB別競合の解消根拠には使わない。

結論: 赤7後200Gは一致。青7後とCB後は資料差を平均・推定せず `CONFLICT`。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `UNVERIFIED`。
- `南国姉妹-30 / 南国姉妹30 / 南国姉妹 / アスワン東京` と `設定変更 / リセット / 朝一 / RT / SWT / 初期状態` を組み替えて再探索したが、正規30φ版の設定変更時RT状態・初期内部状態を直接示す信頼できる資料を確認できなかった。

carryOverBehavior:
- `UNVERIFIED`。
- 据え置き時のRT残G・内部RT状態の扱いを直接示す正規30φ資料を確認できない。
- 通常時天井/周期カウンタは `NONE_CONFIRMED`。

powerCycleBehavior:
- `UNVERIFIED`。
- 電源OFF→ONのみの場合のRT残G・内部状態処理を直接示す資料を確認できない。
- 後年の実機用コイン不要機説明に「電源投入直後」の外付けオートBET状態の記述はあるが、これは実機内部RT/設定変更挙動ではないため採用しない。

gameCounterReset:
- 正規仕様の通常時ゲーム数天井/周期カウンタ: `NONE_CONFIRMED`。
- P-WORLD掲示板のユーザー投稿に天井バージョン差の話題があるが、正規仕様の根拠としては採用しない。

ceilingAfterReset:
- リセット短縮天井/変更後専用天井: `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、設定変更専用モード振り分け: `NONE_CONFIRMED`。

stateAfterReset:
- RT/SWT中に設定変更した場合の残G・内部RT状態: `UNVERIFIED`。
- 通常時の高確/低確等の状態管理: `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 正規30φ版の設定変更時固有恩恵: `NONE_CONFIRMED`。

resetPenalties:
- 正規30φ版の設定変更時固有不利要素: `NONE_CONFIRMED`。

resetDetection:
- 本機固有のガックン、初期出目、液晶/ランプ差、RT挙動等による設定変更/据え置き判別: 再探索後も `UNVERIFIED`。

numericResetData:
- リセット専用天井G、朝一当選率、変更時モード振り分け、変更時RT率などの公開数値: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 2007-09-11更新で `南国姉妹/-30` を2007/9/18発売と記録。2007-10-01更新でも30φ版は9/18発売済みと明記。
   - reliability: CONTEMPORARY_ARCHIVE
2. K-Navi — 南国姉妹-30
   - https://p-kn.com/slot/655/
   - アスワン東京、30φ専用ページ。設定別BIG/REG/機械割「未発表」、各ボーナス払い出し条件、RT表記、SWT概要を確認。
   - reliability: ANALYSIS_HIGH
3. P-WORLD — 南国姉妹-30
   - https://www.p-world.co.jp/machine/database/4949
   - 30φ専用ページ。赤BIG RT200、青BIG RT100、CB132枚超払い出しの記述を確認。RT表記がK-Naviと競合。
   - reliability: INDUSTRY_DB / CONFLICT
4. PACNK — 2007年度機種一覧
   - https://pacnk.com/photoslot/plist2007_0_0.html
   - 南国姉妹-30 / アスワン東京 / 2007年9月を確認。
   - reliability: RETROSPECTIVE_DB
5. スロリスクタイム — 5号機一覧
   - https://pachisuro100.com/itiran/
   - 南国姉妹-30 / A+RT / アスワン東京 / 2007/10を確認。
   - reliability: RETROSPECTIVE_DB
6. パチマガスロマガ — 南国姉妹 基本システム（25φ版参考）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aswan_slot/01/a.php
   - BIG約300枚、REG約120枚、BIG後最大200G RT。30φ同一性能の直接確認がないため参考のみ。
   - reliability: ANALYSIS_HIGH / SIBLING_REFERENCE_ONLY
7. パチマガスロマガ — 南国姉妹 ボーナス抽選確率（25φ版参考）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aswan_slot/01/h.php
   - 設定別赤BIG/青BIG/BIG合成/CB/合成確率。30φへは転記しない。
   - reliability: ANALYSIS_HIGH / SIBLING_REFERENCE_ONLY
8. パチマガスロマガ — 南国姉妹 小役/1000円G（25φ版参考）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aswan_slot/01/c.php
   - 1000円あたり37.17〜43.03G。30φへは転記しない。
   - reliability: ANALYSIS_HIGH / SIBLING_REFERENCE_ONLY
9. 後年実機回顧（裏物存在の交絡確認用）
   - https://ameblo.jp/fbsc/entry-12886641454.html
   - 所有実機の南国姉妹-30基板が裏物であるとの回顧。正規性能値には採用せず、P-WORLD掲示板の天井噂を正規仕様として採用しない判断材料に限定。
   - reliability: RETROSPECTIVE_OWNER_NOTE

## missingFields

- 30φ版の設定別機械割
- 30φ版の設定別赤BIG/青BIG/CB/合算確率
- 30φ版の50枚あたりゲーム数
- 30φ版RTの純増枚数/G
- 青7後RTゲーム数の確定
- CB後RT有無/ゲーム数の確定
- 正規仕様の設定変更/据え置き/電源OFF→ON時RT状態処理
- 本機固有の設定変更判別

## conflicts

- releaseDate:
  - 2007-09-18発売 — 当時のパチスロ業界初まとめ
  - 2007-09 — PACNK
  - 2007-10導入 — スロリスクタイム後年DB
  - 発売日/導入月の定義差の可能性を保持し `CONFLICT`。
- RT length:
  - K-Navi: 赤BIG 200G / 青BIG 200G / CB 100G
  - P-WORLD: 赤BIG 200G / 青BIG 100G / CB後RT記載なし
  - 赤BIG200Gのみ一致。青BIG・CBは解消不能のため `CONFLICT`。

## yardstick note

5号機初期30φの完全告知+A+RTサンプル。赤/青BIGとCBの3ボーナス構成、348枚超/132枚超の払い出し終了条件、ボーナス後RTによる連続性が特徴。30φ版の設定別確率・機械割・ベースは25φ兄弟機の解析値を安易に流用せず欠損として保持し、RTゲーム数も資料競合をそのまま残す。